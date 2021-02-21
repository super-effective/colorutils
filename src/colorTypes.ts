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
 * @typedef {Object} Hsl
 * @property {number} hue - The hue of the color (0 - 360)
 * @property {number} saturation - The saturation the color (0.0 - 1.0)
 * @property {number} lightness - The lightness of the color (0.0 - 1.0)
 */
export type Hsl = {
  hue: number;
  saturation: number;
  lightness: number;
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


export type Cmyk = {
  cyan: number;
  magenta: number;
  yellow: number;
  black: number;
}
