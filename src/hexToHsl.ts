import { Hsl } from './colorTypes';
import hexToRgb from './hexToRgb';
import rgbToHsl from './rgbToHsl';

/**
 * Converts a hex color string to its hue, saturation, and lightness
 * @param {string} colorHex The color value in hex format
 * @returns {Hsl} The HSL values for the color
 */
export default function hexToHsl(colorHex: string): Hsl {
  // Hex validation handled by hexToRgb
  const {
    red,
    green,
    blue,
  } = hexToRgb(colorHex);

  return rgbToHsl(red, green, blue);
}
