import { Cmyk } from './colorTypes';
import hexToRgb from './hexToRgb';
import rgbToCmyk from './rgbToCmyk';

/**
 * Converts a hex color string to its CMYK representation
 * @param {string} colorHex The color value in hex format
 * @returns {Cmyk} The CMYK values for the color
 */
export default function hexToCmyk(colorHex: string): Cmyk {
  // Hex validation handled by hexToRgb
  const {
    red,
    green,
    blue,
  } = hexToRgb(colorHex);

  return rgbToCmyk(red, green, blue);
}
