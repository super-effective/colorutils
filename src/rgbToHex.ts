/**
 * Takes given red, green, and blue values and returns the hex color representation
 * @param {number} red The red component of the color (0 - 255)
 * @param {number} green The green component of the color (0 - 255)
 * @param {number} blue The blue component of the color (0 - 255)
 * @returns {string} The hex string representation of the color
 */
export default function rgbToHex(red: number, green: number, blue: number): string {
  const rgb = blue | (green << 8) | (red << 16);

  return `#${(0x1000000 + rgb).toString(16).slice(1)}`;
}
