#!/usr/bin/env node
/**
 * Local dev helper: player.vimeo.com is sometimes resolved to blocked IPs
 * (e.g. lamanlabuh.aduankonten.id). /etc/hosts overrides fix embeds in the browser.
 *
 * Run automatically before `npm run dev`, or manually: npm run fix-dev-dns
 */
const fs = require("fs");
const { execSync, spawnSync } = require("child_process");
const { lookup } = require("dns").promises;
const { Resolver } = require("dns").promises;

const HOST = "player.vimeo.com";
const MARKER = "# acehost-vimeo-dev";
const HOSTS_PATH = "/etc/hosts";

async function getTrustedIps() {
  const resolver = new Resolver();
  resolver.setServers(["8.8.8.8", "1.1.1.1"]);
  const cname = await resolver.resolveCname(HOST);
  return [...new Set(await resolver.resolve4(cname[0]))].sort();
}

async function getSystemIp() {
  return (await lookup(HOST, { verbatim: true })).address;
}

function readHosts() {
  return fs.readFileSync(HOSTS_PATH, "utf8");
}

function buildHostsBlock(ips) {
  return [
    MARKER,
    ...ips.map((ip) => `${ip}\t${HOST}`),
    `${MARKER}-end`,
  ].join("\n");
}

function upsertHostsBlock(content, block) {
  const withoutBlock = content
    .split("\n")
    .filter(
      (line) =>
        !line.includes(MARKER) &&
        !(line.includes(HOST) && !line.trim().startsWith("#"))
    )
    .join("\n")
    .replace(/\n+$/, "");

  return `${withoutBlock}\n\n${block}\n`;
}

function hostsHasWorkingEntry(content, ips) {
  return ips.some((ip) =>
    content
      .split("\n")
      .some((line) => line.includes(HOST) && line.includes(ip))
  );
}

function applyHostsWithSudo(block) {
  const content = readHosts();
  const nextContent = upsertHostsBlock(content, block);

  if (content === nextContent) {
    return true;
  }

  if (process.getuid && process.getuid() === 0) {
    fs.writeFileSync(HOSTS_PATH, nextContent, "utf8");
    return true;
  }

  const result = spawnSync("sudo", ["tee", HOSTS_PATH], {
    input: nextContent,
    stdio: ["pipe", "inherit", "inherit"],
  });

  return result.status === 0;
}

async function main() {
  const forceFix = process.argv.includes("--fix");

  let trustedIps;
  let systemIp;

  try {
    [trustedIps, systemIp] = await Promise.all([getTrustedIps(), getSystemIp()]);
  } catch (error) {
    console.warn(
      `[dev-vimeo-dns] Could not verify Vimeo DNS (${error.message}). Continuing.`
    );
    return;
  }

  const dnsIsCorrect = trustedIps.includes(systemIp);
  const hostsContent = readHosts();
  const hostsIsCorrect = hostsHasWorkingEntry(hostsContent, trustedIps);

  if (dnsIsCorrect || hostsIsCorrect) {
    console.log(`[dev-vimeo-dns] ${HOST} resolves correctly (${systemIp}).`);
    return;
  }

  console.warn(
    `[dev-vimeo-dns] ${HOST} is blocked by your DNS resolver (${systemIp}).`
  );
  console.warn(
    `[dev-vimeo-dns] Trusted IPs: ${trustedIps.join(", ")}`
  );

  const block = buildHostsBlock(trustedIps);

  if (!forceFix && !process.env.ACEHOST_AUTO_FIX_VIMEO_DNS) {
    console.warn(
      "\nVimeo videos will show \"refused to connect\" on localhost until DNS is fixed."
    );
    console.warn("Run once in your terminal:\n  npm run fix-dev-dns\n");
    if (process.argv.includes("--allow-fail")) {
      return;
    }
    return;
  }

  console.log("[dev-vimeo-dns] Updating /etc/hosts (sudo password may be required)...");

  if (!applyHostsWithSudo(block)) {
    console.error("\n[dev-vimeo-dns] Failed to update /etc/hosts.");
    console.error("Add these lines manually:\n");
    console.error(block);
    if (process.argv.includes("--allow-fail")) {
      console.warn("\n[dev-vimeo-dns] Continuing without fix (--allow-fail).");
      return;
    }
    process.exit(1);
  }

  try {
    execSync("dscacheutil -flushcache", { stdio: "ignore" });
    execSync("killall -HUP mDNSResponder", { stdio: "ignore" });
  } catch {
    // Non-fatal on non-macOS dev machines.
  }

  const updatedIp = await getSystemIp();
  if (!trustedIps.includes(updatedIp)) {
    console.error(
      `[dev-vimeo-dns] /etc/hosts updated but ${HOST} still resolves to ${updatedIp}.`
    );
    process.exit(1);
  }

  console.log(`[dev-vimeo-dns] Fixed. ${HOST} now resolves to ${updatedIp}.`);
}

main().catch((error) => {
  console.error("[dev-vimeo-dns]", error);
  process.exit(1);
});
