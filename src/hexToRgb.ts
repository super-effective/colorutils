import { Rgb } from './colorTypes';

/**
 * Converts a hex color string to its red, green, and blue component values
 * @param {string} colorHex The color value in hex format
 * @returns {Rgb} The RGB values for the color
 */
export default function hexToRgb(colorHex: string): Rgb {
  let sanitizedHex = colorHex.replace(/[^a-fA-F0-9]/g, '');

  if (sanitizedHex.length !== 6 && sanitizedHex.length !== 3) {
    throw new Error(`Color should be either 3 or 6 characters in length - received a length of ${sanitizedHex.length}`);
  }

  if (sanitizedHex.length === 3) {
    sanitizedHex = `${sanitizedHex[0].repeat(2)}${sanitizedHex[1].repeat(2)}${sanitizedHex[2].repeat(2)}`;
  }

  const rgb = parseInt(sanitizedHex, 16);

  if (Number.isNaN(rgb)) {
    throw new Error(`Unable to parse hex color ${colorHex}`);
  }

  const red = (rgb >> 16) & 0xff;
  const green = (rgb >> 8) & 0xff;
  const blue = (rgb) & 0xff;

  return {
    red,
    green,
    blue,
  };
}
