const fs = require("fs");
const path = require("path");

const DETAILS_DIR = path.join(process.cwd(), "src/data/listings/details");

const ICON_IMPORTS = {
  FaBed: { from: "react-icons/fa", names: ["FaBed", "FaBath"] },
  FaBath: { from: "react-icons/fa", names: ["FaBed", "FaBath"] },
  Home: { from: "lucide-react", names: ["Home", "Users", "MapPin", "Bed", "Bath"] },
  Users: { from: "lucide-react", names: ["Home", "Users", "MapPin", "Bed", "Bath"] },
  MapPin: { from: "lucide-react", names: ["Home", "Users", "MapPin", "Bed", "Bath"] },
  Bed: { from: "lucide-react", names: ["Home", "Users", "MapPin", "Bed", "Bath"] },
  Bath: { from: "lucide-react", names: ["Home", "Users", "MapPin", "Bed", "Bath"] },
};

for (const file of fs.readdirSync(DETAILS_DIR)) {
  if (!file.endsWith(".tsx")) continue;
  const filePath = path.join(DETAILS_DIR, file);
  let content = fs.readFileSync(filePath, "utf8");

  // Fix broken extraction starting with id="details"
  if (content.includes('id="details">') && !content.includes('<div className="max-w-6xl')) {
    content = content.replace(
      /<>[\s\n]*id="details">/,
      '<>\n      <div className="max-w-6xl mx-auto px-4" id="details">'
    );
    if (!content.includes("</div>\n    </>")) {
      content = content.replace(/\s*<\/>[\s\n]*\);/, "\n      </div>\n    </>\n  );");
    }
  }

  const neededLucide = new Set();
  const neededFa = new Set();
  for (const [icon, cfg] of Object.entries(ICON_IMPORTS)) {
    if (content.includes(`<${icon}`) || content.includes(`<${icon} `)) {
      if (cfg.from === "lucide-react") cfg.names.forEach((n) => neededLucide.add(n));
      if (cfg.from === "react-icons/fa") cfg.names.forEach((n) => neededFa.add(n));
    }
  }

  // Remove default imports block and rebuild
  content = content.replace(/import[\s\S]*?from ["'][^"']+["'];\n/g, "");
  const imports = ['import React from "react";', 'import Image from "next/image";', 'import Link from "next/link";'];
  if (content.includes("PropertyDetails")) {
    imports.push('import PropertyDetails from "@/components/PropertyDetails";');
  }
  if (content.includes("LazyVimeoPlayer")) {
    imports.push('import LazyVimeoPlayer from "@/components/LazyVimeoPlayer";');
  }
  if (neededFa.size) {
    imports.push(`import { ${[...neededFa].join(", ")} } from "react-icons/fa";`);
  }
  if (neededLucide.size) {
    imports.push(`import { ${[...neededLucide].join(", ")} } from "lucide-react";`);
  }
  imports.push('import type { ListingDetailsProps } from "../types";');

  const fnMatch = content.match(/export default function[\s\S]*/);
  if (!fnMatch) continue;
  content = imports.join("\n") + "\n\n" + fnMatch[0];
  fs.writeFileSync(filePath, content);
  console.log("Fixed:", file);
}
