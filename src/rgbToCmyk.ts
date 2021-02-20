import { Cmyk } from './colorTypes';

/**
 * Takes given red, green, and blue values and returns the CMYK representation
 * @param {number} red The red component of the color (0 - 255)
 * @param {number} green The green component of the color (0 - 255)
 * @param {number} blue The blue component of the color (0 - 255)
 * @returns {Cmyk} The CMYK representation of the color
 */
export default function rgbToCmyk(red: number, green: number, blue: number): Cmyk {
  const redPercent = red / 255;
  const greenPercent  =  green / 255;
  const bluePercent = blue / 255;

  const black = Math.min(1 - redPercent, 1 - greenPercent, 1 - bluePercent);
  const cyan = (1 - redPercent - black) / (1 - black) || 0;
  const magenta = (1 - greenPercent - black) / (1 - black) || 0;
  const yellow = (1 - bluePercent - black) / (1 - black) || 0;

  return {
    cyan,
    magenta,
    yellow,
    black,
  }
}
