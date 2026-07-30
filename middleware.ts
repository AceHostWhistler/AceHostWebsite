import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  buildPrimaryUrl,
  shouldRedirectToPrimary,
} from "@/data/seo/domains";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";

  if (!shouldRedirectToPrimary(host)) {
    return NextResponse.next();
  }

  const destination = buildPrimaryUrl(
    request.nextUrl.pathname,
    request.nextUrl.search
  );

  return NextResponse.redirect(destination, 301);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|xml|webmanifest)$).*)",
  ],
};
