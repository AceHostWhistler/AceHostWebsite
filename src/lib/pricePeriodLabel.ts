export function getPrimaryPricePeriodLabel(priceRange: string): string {
  const lower = priceRange.toLowerCase();
  if (lower.includes("monthly")) return "Monthly";
  if (lower.includes("per event")) return "Per event";
  return "Nightly";
}
