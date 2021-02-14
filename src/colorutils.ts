/* eslint-disable no-bitwise */

/**
 * @typedef {Object} Rgb
 * @property {number} red - The red component of the color (0 - 255)
 * @property {number} green - The green component of the color (0 - 255)
 * @property {number} blue - The blue component of the color (0 - 255)
 */
export type Rgb = {
  red: number;
  green: number;
  blue: number;
}

/**
 * @typedef {Object} Hsv
 * @property {number} hue - The hue of the color (0 - 360)
 * @property {number} saturation - The saturation the color (0.0 - 1.0)
 * @property {number} value - The value of the color (0.0 - 1.0)
 */
export type Hsv = {
  hue: number;
  saturation: number;
  value: number;
}


/**
 * Removes invalid characters and formats color hex to 6 characters
 * @param {string} colorHex The color value in hex format to sanitize
 * @returns {string} The sanitized hex color
 */
export function sanitizeHex(colorHex: string): string {
  let sanitizedHex = colorHex.replace(/[^a-fA-F0-9]/g, '');

  if (sanitizedHex.length === 0) {
    sanitizedHex = '000000';
  } else if (sanitizedHex.length === 1) {
    sanitizedHex = sanitizedHex[0].repeat(6);
  } else if (sanitizedHex.length === 2) {
    sanitizedHex = `${sanitizedHex[0].repeat(3)}${sanitizedHex[1].repeat(3)}`;
  } else if (sanitizedHex.length >= 3 && sanitizedHex.length < 6) {
    sanitizedHex = `${sanitizedHex[0].repeat(2)}${sanitizedHex[1].repeat(2)}${sanitizedHex[2].repeat(2)}`;
  } else if (sanitizedHex.length > 6) {
    sanitizedHex = sanitizedHex.substr(0, 6);
  }

  return `#${sanitizedHex}`;
}

/**
 * Converts a hex color string to its red, green, and blue component values
 * @param {string} colorHex The color value in hex format
 * @returns {Rgb} The RGB values for the color
 */
export function hexToRgb(colorHex: string): Rgb {
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

/**
 * Takes given hue, saturation and value and returns the respective RGB values
 * @param {number} hue The hue of the color (0.0 - 1.0)
 * @param {number} saturation The saturation of the color (0.0 - 1.0)
 * @param {number} value The value of the color (0.0 - 1.0)
 * @returns {Rgb} The RGB values for the color
 */
export function hsvToRgb(hue: number, saturation: number, value: number): Rgb {
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

/**
 * Converts a hex color string to its hue, saturation, and value
 * @param {string} colorHex The color value in hex format
 * @returns {Hsv} The HSV values for the color
 */
export function hexToHsv(colorHex: string): Hsv {
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


/**
 * Takes given red, green, and blue values and returns the hex color representation
 * @param {number} red The red component of the color (0 - 255)
 * @param {number} green The green component of the color (0 - 255)
 * @param {number} blue The blue component of the color (0 - 255)
 * @returns {string} The hex string representation of the color
 */
export function rgbToHex(red: number, green: number, blue: number): string {
  const rgb = blue | (green << 8) | (red << 16);

  return `#${(0x1000000 + rgb).toString(16).slice(1)}`;
}

/**
 * Takes given hue, saturation and value and returns the hex color representation
 * @param {number} hue The hue of the color (0.0 - 1.0)
 * @param {number} saturation The saturation of the color (0.0 - 1.0)
 * @param {number} value The value of the color (0.0 - 1.0)
 * @returns {string} The hex string representation of the color
 */
export function hsvToHex(hue: number, saturation: number, value: number): string {
  // Bounds check handled by hsvToRgb
  const {
    red,
    green,
    blue,
  } = hsvToRgb(hue, saturation, value);

  return rgbToHex(red, green, blue);
}


/**
 * Get the perceived brightness of a given color
 * See: https://www.w3.org/TR/AERT/#color-contrast
 * @param {number} red The red component of the color (0 - 255)
 * @param {number} green The green component of the color (0 - 255)
 * @param {number} blue The blue component of the color (0 - 255)
 * @returns {number} The perceived brightness of the color (0.0 - 1.0)
 */
export function getPerceivedLuminance(red: number, green: number, blue: number): number {
  return ((red * 0.299) + (green * 0.587) + (blue * 0.114)) / 255;
}
