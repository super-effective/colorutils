import { Rgb } from 'colorTypes';

function hueToRgb(p: number, q: number, t: number) {
  let clampedT = t;
  if (t < 0) {
    clampedT += 360;
  }
  if (clampedT > 360) {
    clampedT -= 360;
  }

  if(clampedT < 60) {
    return p + (q - p) * 6 * (clampedT / 360);
  }
  if(clampedT < 180) {
    return q;
  }
  if(clampedT < 240) {
    return p + (q - p) * ((240 - clampedT) / 360) * 6;
  }

  return p;
}

/**
 * Takes given hue, saturation and lightness and returns the respective RGB values
 * @param {number} hue The hue of the color (0.0 - 360.0)
 * @param {number} saturation The saturation of the color (0.0 - 1.0)
 * @param {number} lightness The value of the color (0.0 - 1.0)
 * @returns {Rgb} The RGB values for the color
 */
export default function hslToRgb(hue: number, saturation: number, lightness: number): Rgb {
  // Bounds check
  if ((hue < 0 || hue > 360)
      || (saturation < 0 || saturation > 1)
      || (lightness < 0 || lightness > 1)) {
    throw new Error('Invalid hue, saturation, or value - all values must be between 0 and 1');
  }

  // Achromatic
  if (saturation === 0) {
    const rgb = Math.round(lightness * 255);
    return {
      red: rgb,
      green: rgb,
      blue: rgb,
    };
  }

  const q = (lightness < 0.5) ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
  const p = 2 * lightness - q;

  const red = hueToRgb(p, q, hue + 120);
  const green = hueToRgb(p, q, hue);
  const blue = hueToRgb(p, q, hue - 120);

  return {
    red: Math.round(red * 255),
    green: Math.round(green * 255),
    blue: Math.round(blue * 255),
  };
}
