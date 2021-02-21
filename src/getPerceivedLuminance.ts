/**
 * Get the perceived brightness of a given color
 * See: https://www.w3.org/TR/AERT/#color-contrast
 * @param {number} red The red component of the color (0 - 255)
 * @param {number} green The green component of the color (0 - 255)
 * @param {number} blue The blue component of the color (0 - 255)
 * @returns {number} The perceived brightness of the color (0.0 - 1.0)
 */
export default function getPerceivedLuminance(red: number, green: number, blue: number): number {
  return ((red * 0.299) + (green * 0.587) + (blue * 0.114)) / 255;
}
