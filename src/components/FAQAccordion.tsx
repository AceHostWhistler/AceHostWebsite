import React from "react";
import { Plus, Minus } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  expandedIndex: number | null;
  onToggle: (index: number) => void;
}

/**
 * Ivory Homes-style FAQ accordion with + icon and horizontal separators.
 */
const FAQAccordion: React.FC<FAQAccordionProps> = ({
  items,
  expandedIndex,
  onToggle,
}) => {
  return (
    <div className="max-w-3xl mx-auto">
      {items.map((faq, index) => (
        <div
          key={index}
          className="border-b border-cream-300 py-6 first:pt-0 last:border-b-0"
        >
          <button
            onClick={() => onToggle(expandedIndex === index ? -1 : index)}
            className="w-full flex items-start justify-between gap-6 text-left group"
          >
            <span className="font-display font-extralight text-charcoal-dark tracking-wide text-lg md:text-xl pr-4">
              {faq.question}
            </span>
            <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-charcoal-muted group-hover:text-charcoal transition-colors">
              {expandedIndex === index ? (
                <Minus className="w-4 h-4" strokeWidth={1.5} />
              ) : (
                <Plus className="w-4 h-4" strokeWidth={1.5} />
              )}
            </span>
          </button>
          {expandedIndex === index && (
            <div className="mt-4 pl-0">
              <p className="font-sans font-light text-charcoal-muted text-base leading-relaxed">
                {faq.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
