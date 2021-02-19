import { Rgb } from 'colorTypes';

/**
 * Takes given hue, saturation and value and returns the respective RGB values
 * @param {number} hue The hue of the color (0.0 - 1.0)
 * @param {number} saturation The saturation of the color (0.0 - 1.0)
 * @param {number} value The value of the color (0.0 - 1.0)
 * @returns {Rgb} The RGB values for the color
 */
export default function hsvToRgb(hue: number, saturation: number, value: number): Rgb {
  // Bounds check
  if ((hue < 0 || hue > 360)
      || (saturation < 0 || saturation > 1)
      || (value < 0 || value > 1)) {
    throw new Error('Invalid hue, saturation, or value - all values must be between 0 and 1');
  }

  let red = 0;
  let green = 0;
  let blue = 0;

  const huePercent = hue / 360;
  const i = Math.floor(huePercent * 6);
  const f = huePercent * 6 - i;
  const p = value * (1 - saturation);
  const q = value * (1 - f * saturation);
  const t = value * (1 - (1 - f) * saturation);

  switch (i % 6) {
    case 0: {
      red = value;
      green = t;
      blue = p;
      break;
    }
    case 1: {
      red = q;
      green = value;
      blue = p;
      break;
    }
    case 2: {
      red = p;
      green = value;
      blue = t;
      break;
    }
    case 3: {
      red = p;
      green = q;
      blue = value;
      break;
    }
    case 4: {
      red = t;
      green = p;
      blue = value;
      break;
    }
    case 5: {
      red = value;
      green = p;
      blue = q;
      break;
    }
    default: {
      // Shouldn't reach here - break
      break;
    }
  }

  red = Math.round(red * 255);
  green = Math.round(green * 255);
  blue = Math.round(blue * 255);

  return {
    red,
    green,
    blue,
  };
}
