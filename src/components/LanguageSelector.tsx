import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";

const LanguageSelector = () => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en", name: t("language_selector.en"), flag: "🇬🇧" },
    { code: "fr", name: t("language_selector.fr"), flag: "🇫🇷" },
    { code: "it", name: t("language_selector.it"), flag: "🇮🇹" },
  ];

  const changeLanguage = (locale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale });
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setIsOpen(false);
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Stop propagation to prevent the dropdown from closing when clicking inside it
  const handleDropdownClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const displayText = languages.map((l) => l.code.toUpperCase()).join(" | ");

  return (
    <div className="relative" onClick={handleDropdownClick}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center py-1 text-charcoal-muted hover:text-charcoal focus:outline-none font-sans font-light tracking-luxury uppercase text-xs"
        aria-label={t("language_selector.language")}
      >
        {displayText}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-cream-50 border border-cream-300 shadow-lg z-50 py-2">
          <div className="py-1">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => changeLanguage(language.code)}
                className={`flex items-center w-full px-4 py-2 text-sm text-left hover:bg-gray-100 ${
                  router.locale === language.code
                    ? "font-semibold bg-gray-50"
                    : ""
                }`}
              >
                <span className="mr-2">{language.flag}</span>
                {language.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
