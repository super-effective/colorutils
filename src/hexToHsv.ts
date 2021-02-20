import { Hsv } from './colorTypes';
import hexToRgb from './hexToRgb';
import rgbToHsv from './rgbToHsv';

/**
 * Converts a hex color string to its hue, saturation, and value
 * @param {string} colorHex The color value in hex format
 * @returns {Hsv} The HSV values for the color
 */
export default function hexToHsv(colorHex: string): Hsv {
  // Hex validation handled by hexToRgb
  const {
    red,
    green,
    blue,
  } = hexToRgb(colorHex);

  return rgbToHsv(red, green, blue);
}
