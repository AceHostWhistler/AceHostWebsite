import React from "react";
import { Instagram, Youtube } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cream border-t border-cream-300 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Branding and Description */}
          <div className="col-span-1">
            <Link href="/" className="inline-block mb-6">
              <div className="relative w-48 h-16">
                <Image
                  src="/logonobackrgound.png"
                  alt="AceHost Logo"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>
            <p className="text-charcoal-muted font-light mb-8 pr-4">
              AceHost is a leading Whistler luxury property management company
              offering magnificent vacation rental homes in Whistler, British
              Columbia.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/acehost_whistler/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal-muted hover:text-charcoal transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.youtube.com/@acehost_Whistler/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal-muted hover:text-charcoal transition-colors"
                aria-label="Youtube"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>

          {/* Properties Column */}
          <div className="col-span-1">
            <h3 className="text-lg font-display font-extralight text-charcoal-dark mb-6 tracking-wide-luxury uppercase">
              Properties
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/concierge-service"
                  className="text-charcoal-muted font-light hover:text-charcoal transition-colors"
                >
                  Concierge Services
                </Link>
              </li>
              <li>
                <Link
                  href="/properties"
                  className="text-charcoal-muted font-light hover:text-charcoal transition-colors"
                >
                  Luxury Properties
                </Link>
              </li>
              <li>
                <Link
                  href="/list-property"
                  className="text-charcoal-muted font-light hover:text-charcoal transition-colors"
                >
                  Property Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="col-span-1">
            <h3 className="text-lg font-display font-extralight text-charcoal-dark mb-6 tracking-wide-luxury uppercase">
              Resources
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/blogs"
                  className="text-charcoal-muted font-light hover:text-charcoal transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-charcoal-muted font-light hover:text-charcoal transition-colors"
                >
                  FAQ's
                </Link>
              </li>
              <li>
                <Link
                  href="/our-story"
                  className="text-charcoal-muted font-light hover:text-charcoal transition-colors"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-charcoal-muted font-light hover:text-charcoal transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Column */}
          <div className="col-span-1">
            <h3 className="text-lg font-display font-extralight text-charcoal-dark mb-6 tracking-wide-luxury uppercase">Social</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://www.instagram.com/acehost_whistler/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-charcoal-muted font-light hover:text-charcoal transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@acehost_Whistler/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-charcoal-muted font-light hover:text-charcoal transition-colors"
                >
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream-300 text-center">
          <p className="text-charcoal-muted font-light flex items-center justify-center">
            © {currentYear}
            <span className="inline-block mx-2 relative w-24 h-8">
              <Image
                src="/logonobackrgound.png"
                alt="AceHost Logo"
                fill
                className="object-contain"
              />
            </span>
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
