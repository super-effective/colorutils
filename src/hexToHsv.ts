import { Hsv } from './colorTypes';
import hexToRgb from './hexToRgb';

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
