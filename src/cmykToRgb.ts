import { Rgb } from './colorTypes';

/**
 * Takes given cyan, magenta, yellow, and black values and returns the RGB representation
 * @param {number} cyan The cyan component of the color (percentage represented as 0 - 1)
 * @param {number} magenta The magenta component of the color (percentage represented as 0 - 1)
 * @param {number} yellow The yellow component of the color (percentage represented as 0 - 1)
 * @param {number} black The black component of the color (percentage represented as 0 - 1)
 * @returns {Rgb} The Rgb representation of the color
 */
export default function cmykToRgb(cyan: number, magenta: number, yellow: number, black: number): Rgb {
  const blackModifier = 1 - (black);
  const red = Math.round(255 * (1 - cyan) * blackModifier);
  const green = Math.round(255 * (1 - magenta) * blackModifier);
  const blue = Math.round(255 * (1 - yellow) * blackModifier);

  return {
    red,
    green,
    blue,
  }
}
