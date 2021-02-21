import hslToRgb from './hslToRgb';
import rgbToHex from './rgbToHex';

/**
 * Takes given hue, saturation and lightness and returns the hex color representation
 * @param {number} hue The hue of the color (0.0 - 360.0)
 * @param {number} saturation The saturation of the color (0.0 - 1.0)
 * @param {number} lightness The lightness of the color (0.0 - 1.0)
 * @returns {string} The hex string representation of the color
 */
export default function hslToHex(hue: number, saturation: number, lightness: number): string {
  // Bounds check handled by hslToRgb
  const {
    red,
    green,
    blue,
  } = hslToRgb(hue, saturation, lightness);

  return rgbToHex(red, green, blue);
}
