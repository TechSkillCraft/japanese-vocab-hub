// src/utils/safeText.js

/**
 * Safely converts a value to lowercase string.
 * Prevents crashes like: undefined.toLowerCase()
 */
export const safeLower = (value) => {
  if (value === null || value === undefined) return "";
  return String(value).toLowerCase();
};
