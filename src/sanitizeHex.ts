/**
 * Removes invalid characters and formats color hex to 6 characters
 * @param {string} colorHex The color value in hex format to sanitize
 * @returns {string} The sanitized hex color
 */
export default function sanitizeHex(colorHex: string): string {
  let sanitizedHex = colorHex.replace(/[^a-fA-F0-9]/g, '');

  if (sanitizedHex.length === 0) {
    sanitizedHex = '000000';
  } else if (sanitizedHex.length === 1) {
    sanitizedHex = sanitizedHex[0].repeat(6);
  } else if (sanitizedHex.length === 2) {
    sanitizedHex = `${sanitizedHex[0].repeat(3)}${sanitizedHex[1].repeat(3)}`;
  } else if (sanitizedHex.length >= 3 && sanitizedHex.length < 6) {
    sanitizedHex = `${sanitizedHex[0].repeat(2)}${sanitizedHex[1].repeat(2)}${sanitizedHex[2].repeat(2)}`;
  } else if (sanitizedHex.length > 6) {
    sanitizedHex = sanitizedHex.substr(0, 6);
  }

  return `#${sanitizedHex}`;
}
