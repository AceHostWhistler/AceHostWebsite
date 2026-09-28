const CAD_INTEGER = new Intl.NumberFormat("en-CA", {
  useGrouping: true,
  maximumFractionDigits: 0,
});

const PRICE_NUMBER =
  /(?<![A-Za-z0-9])(\$|£|€)?(\d{1,3}(?:,\d{3})+|\d{4,})(\.\d+)?(?!\d)/g;

function isCalendarYear(value: number): boolean {
  return Number.isInteger(value) && value >= 1900 && value <= 2099;
}

/** Formats a numeric price for display. Values under 1,000 stay ungrouped. */
export function formatPriceNumber(value: number): string {
  if (!Number.isFinite(value)) return String(value);
  if (Math.abs(value) < 1000) {
    return String(value);
  }
  return CAD_INTEGER.format(value);
}

/**
 * Adds thousands separators to monetary amounts of 1,000 or more inside a
 * human-facing price string. Leaves currency symbols, plus signs, hyphens,
 * labels, and amounts under 1,000 unchanged.
 */
export function formatDisplayedPrice(
  text: string | undefined | null
): string {
  if (text == null || text === "") return text ?? "";

  return text.replace(
    PRICE_NUMBER,
    (
      raw,
      currency: string | undefined,
      intPart: string,
      decimal: string | undefined,
      offset: number,
      source: string
    ) => {
      const amount = Number(intPart.replace(/,/g, ""));
      if (!Number.isFinite(amount) || Math.abs(amount) < 1000) {
        return raw;
      }
      if (!currency && isCalendarYear(amount)) {
        const before = source.slice(0, offset);
        const inPriceRange =
          /(?:\$|£|€)\s*[\d,]+(?:\.\d+)?\s*[-–]\s*$/.test(before);
        if (!inPriceRange) {
          return raw;
        }
      }
      // Leave North American phone last-fours unchanged (604-764-8919).
      if (!currency && /\d{3}-\d{3}-$/.test(source.slice(0, offset))) {
        return raw;
      }
      return `${currency ?? ""}${formatPriceNumber(amount)}${decimal ?? ""}`;
    }
  );
}
