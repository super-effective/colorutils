import cmykToRgb from './cmykToRgb';
import rgbToHex from './rgbToHex';

/**
 * Takes given cyan, magenta, yellow, and black values and returns the hex representation
 * @param {number} cyan The cyan component of the color (percentage represented as 0 - 1)
 * @param {number} magenta The magenta component of the color (percentage represented as 0 - 1)
 * @param {number} yellow The yellow component of the color (percentage represented as 0 - 1)
 * @param {number} black The black component of the color (percentage represented as 0 - 1)
 * @returns {string} The hex representation of the color
 */
export default function cmykToHex(cyan: number, magenta: number, yellow: number, black: number): string {
  const {
    red,
    green,
    blue,
  } = cmykToRgb(cyan, magenta, yellow, black);

  return rgbToHex(red, green, blue)
}
