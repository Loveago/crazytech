export const SUPPORT_CATEGORIES = [
  "Data not received",
  "Payment or wallet issue",
  "Refund request",
  "Account or login problem",
  "Storefront / reseller help",
  "API / developer integration",
  "Report a bug",
  "Other",
] as const;

export type SupportCategory = (typeof SUPPORT_CATEGORIES)[number];
