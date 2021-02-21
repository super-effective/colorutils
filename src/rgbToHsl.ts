import { Hsl } from './colorTypes';

/**
 * Takes given red, green, and blue values and returns the HSL representation
 * @param {number} red The red component of the color (0 - 255)
 * @param {number} green The green component of the color (0 - 255)
 * @param {number} blue The blue component of the color (0 - 255)
 * @returns {Hsl} The HSL representation of the color
 */
export default function rgbToHsl(red: number, green: number, blue: number): Hsl {
  const redPercent = red / 255;
  const greenPercent = green / 255;
  const bluePercent = blue / 255;

  const max = Math.max(redPercent, greenPercent, bluePercent);
  const min = Math.min(redPercent, greenPercent, bluePercent);
  const lightness = (max + min) / 2;

  let hue = 0;
  let saturation = 0;

  if (red === green && red === blue) {
    // Achromatic - no color
  } else {
    const diff = max - min;
    saturation = lightness > 0.5 ? (diff / (2 - max - min)) : diff / (max + min);
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
    lightness,
  };
}
