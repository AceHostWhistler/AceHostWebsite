import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import {
  Menu,
  ChevronDown,
  X,
} from "lucide-react";
import LanguageSelector from "./LanguageSelector";
import { useRouter } from "next/router";

interface NavigationProps {
  currentPage?: string;
  showActions?: boolean;
  transparent?: boolean;
}

const Navigation = ({
  currentPage,
  showActions = true,
  transparent = false,
}: NavigationProps) => {
  const { push } = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const resourcesRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation("common");

  // Handle scroll events for sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        resourcesRef.current &&
        !resourcesRef.current.contains(event.target as Node)
      ) {
        setShowResourcesDropdown(false);
      }

      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest(
          'button[aria-label="Toggle menu"]'
        )
      ) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [resourcesRef, mobileMenuRef]);

  const resourcesDropdownItems = [
    { text: "All Blogs", url: "/blogs" },
    { text: "FAQ's", url: "/faq" },
  ];

  const navLinks = [
    { text: "Home", url: "/" },
    { text: "Luxury Rental Homes", url: "/properties" },
    { text: "Concierge Services", url: "/concierge-service" },
    { text: "Property Management", url: "/list-property" },
    { text: "About", url: "/our-story" },
  ];

  return (
    <nav
      className={`${
        transparent && !isScrolled ? "bg-transparent" : "bg-cream"
      } sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "shadow-sm backdrop-blur-sm bg-cream/95 border-b border-cream-300" 
          : "border-b border-cream-300"
      }`}
    >
      {/* Ivory Homes-style: left branding | center logo | right language + menu */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between ${isScrolled ? 'h-16' : 'h-20'} transition-all duration-300`}>
          {/* Spacer for centering */}
          <div className="flex-1 min-w-0" />

          {/* Center: Main logo */}
          <div className="flex flex-1 justify-center items-center min-w-0">
            <Link href="/" className="flex flex-col items-center">
              <div className={`relative ${isScrolled ? 'w-28 h-12' : 'w-32 h-14'} transition-all duration-300`}>
                <Image
                  src="/logonobackrgound.png"
                  alt="AceHost"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Right: Language (Ivory style) + Hamburger */}
          <div className="flex items-center gap-6 flex-1 justify-end min-w-0">
            <div className="hidden sm:block font-sans text-xs font-light text-charcoal-muted tracking-luxury uppercase">
              <LanguageSelector />
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-charcoal-muted hover:text-charcoal transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-5 w-5" strokeWidth={1.5} /> : <Menu className="h-5 w-5" strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop & Mobile Menu - Full overlay (Ivory style) */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/20 z-40"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
          <div
            ref={mobileMenuRef}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-cream shadow-xl z-50 overflow-y-auto border-l border-cream-300 transform transition-transform duration-300"
          >
            <div className="p-8 pt-20">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-6 right-6 p-2 text-charcoal-muted hover:text-charcoal"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.url}
                    href={link.url}
                    onClick={() => setIsMenuOpen(false)}
                    className={`py-4 text-lg font-display font-extralight tracking-luxury uppercase border-b border-cream-300 ${
                      currentPage === link.url ? "text-charcoal-dark" : "text-charcoal-muted hover:text-charcoal"
                    }`}
                  >
                    {link.text}
                  </Link>
                ))}
                <div className="relative pt-4" ref={resourcesRef}>
                  <button
                    onClick={() => setShowResourcesDropdown(!showResourcesDropdown)}
                    className="py-4 text-lg font-display font-extralight tracking-luxury uppercase border-b border-cream-300 w-full text-left flex items-center justify-between text-charcoal-muted hover:text-charcoal"
                  >
                    Resources
                    <ChevronDown className={`h-5 w-5 transition-transform ${showResourcesDropdown ? "rotate-180" : ""}`} />
                  </button>
                  {showResourcesDropdown && (
                    <div className="pl-4 mt-2 space-y-2">
                      <Link href="/blogs" onClick={() => { setShowResourcesDropdown(false); setIsMenuOpen(false); }} className="block py-2 text-charcoal-muted hover:text-charcoal">
                        All Blogs
                      </Link>
                      <Link href="/faq" onClick={() => { setShowResourcesDropdown(false); setIsMenuOpen(false); }} className="block py-2 text-charcoal-muted hover:text-charcoal">
                        FAQ&apos;s
                      </Link>
                    </div>
                  )}
                </div>
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-6 inline-block bg-charcoal text-cream px-8 py-4 text-sm font-normal tracking-luxury uppercase hover:bg-charcoal-light transition-colors text-center w-full"
                >
                  Contact Us
                </Link>
              </nav>
            </div>
          </div>
        </>
      )}

    </nav>
  );
};

export default Navigation;
