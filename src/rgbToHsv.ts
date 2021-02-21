import { Hsv } from './colorTypes';

/**
 * Takes given red, green, and blue values and returns the HSV representation
 * @param {number} red The red component of the color (0 - 255)
 * @param {number} green The green component of the color (0 - 255)
 * @param {number} blue The blue component of the color (0 - 255)
 * @returns {Hsv} The HSV representation of the color
 */
export default function rgbToHsv(red: number, green: number, blue: number): Hsv {
  const redPercent = red / 255;
  const greenPercent = green / 255;
  const bluePercent = blue / 255;

  const max = Math.max(redPercent, greenPercent, bluePercent);
  const min = Math.min(redPercent, greenPercent, bluePercent);
  const diff = max - min;

  let hue = 0;
  const saturation = (max === 0) ? 0 : diff / max;
  const value = max;

  if (min === max) {
    // Achromatic - no color
  } else {
    switch (max) {
      case redPercent: {
        hue = (greenPercent - bluePercent) / diff + (greenPercent < bluePercent ? 6 : 0);
        break;
      }
      case greenPercent: {
        hue = (bluePercent - redPercent) / diff + 2;
        break;
      }
      case bluePercent: {
        hue = (redPercent - greenPercent) / diff + 4;
        break;
      }
      default: {
        // Shouldn't reach here - break
        break;
      }
    }

    hue /= 6;
    hue *= 360;
  }

  return {
    hue,
    saturation,
    value,
  };
}
