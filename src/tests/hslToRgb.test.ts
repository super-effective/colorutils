import hslToRgb from '../hslToRgb';
import {
  RGB_DARK_TEAL,
  RGB_TEAL,
  RGB_WHITE,
  RGB_BLACK,
  RGB_RED,
  RGB_YELLOW,
  RGB_GREEN,
  RGB_CYAN,
  RGB_BLUE,
  RGB_MAGENTA,
  HSL_BLACK,
  HSL_BLUE,
  HSL_CYAN,
  HSL_GREEN,
  HSL_MAGENTA,
  HSL_RED,
  HSL_TEAL,
  HSL_WHITE,
  HSL_YELLOW,
  HSL_DARK_TEAL,
} from './data/colors';

/**
 * HSL to RGB
 */
describe('hslToRgb', () => {
  test('hslToRgb - color', () => {
    const teal = hslToRgb(HSL_TEAL.hue, HSL_TEAL.saturation, HSL_TEAL.lightness);
    expect(teal).toStrictEqual(RGB_TEAL);
  });

  test('hslToRgb - dark color', () => {
    const teal = hslToRgb(HSL_DARK_TEAL.hue, HSL_DARK_TEAL.saturation, HSL_DARK_TEAL.lightness);
    expect(teal).toStrictEqual(RGB_DARK_TEAL);
  });

  test('hslToRgb - white', () => {
    const white = hslToRgb(HSL_WHITE.hue, HSL_WHITE.saturation, HSL_WHITE.lightness);
    expect(white).toStrictEqual(RGB_WHITE);
  });

  test('hslToRgb - black', () => {
    const black = hslToRgb(HSL_BLACK.hue, HSL_BLACK.saturation, HSL_BLACK.lightness);
    expect(black).toStrictEqual(RGB_BLACK);
  });

  // Bounds checks
  test('hslToRgb - invalid hue, < 0', () => {
    expect(() => hslToRgb(-1, HSL_RED.saturation, HSL_RED.lightness)).toThrow(Error);
  });

  test('hslToRgb - invalid hue, > 1', () => {
    expect(() => hslToRgb(361, HSL_RED.saturation, HSL_RED.lightness)).toThrow(Error);
  });

  test('hslToRgb - invalid saturation, < 0', () => {
    expect(() => hslToRgb(HSL_RED.hue, -1, HSL_RED.lightness)).toThrow(Error);
  });

  test('hslToRgb - invalid saturation, > 1', () => {
    expect(() => hslToRgb(HSL_RED.hue, 1.1, HSL_RED.lightness)).toThrow(Error);
  });

  test('hslToRgb - invalid value, < 0', () => {
    expect(() => hslToRgb(HSL_RED.hue, HSL_RED.saturation, -1)).toThrow(Error);
  });

  test('hslToRgb - invalid value, > 1', () => {
    expect(() => hslToRgb(HSL_RED.hue, HSL_RED.saturation, 1.1)).toThrow(Error);
  });

  // Color ranges
  test('hslToRgb - red', () => {
    const teal = hslToRgb(HSL_RED.hue, HSL_RED.saturation, HSL_RED.lightness);
    expect(teal).toStrictEqual(RGB_RED);
  });

  test('hslToRgb - yellow', () => {
    const teal = hslToRgb(HSL_YELLOW.hue, HSL_YELLOW.saturation, HSL_YELLOW.lightness);
    expect(teal).toStrictEqual(RGB_YELLOW);
  });

  test('hslToRgb - green', () => {
    const teal = hslToRgb(HSL_GREEN.hue, HSL_GREEN.saturation, HSL_GREEN.lightness);
    expect(teal).toStrictEqual(RGB_GREEN);
  });

  test('hslToRgb - cyan', () => {
    const teal = hslToRgb(HSL_CYAN.hue, HSL_CYAN.saturation, HSL_CYAN.lightness);
    expect(teal).toStrictEqual(RGB_CYAN);
  });

  test('hslToRgb - blue', () => {
    const teal = hslToRgb(HSL_BLUE.hue, HSL_BLUE.saturation, HSL_BLUE.lightness);
    expect(teal).toStrictEqual(RGB_BLUE);
  });

  test('hslToRgb - magenta', () => {
    const teal = hslToRgb(HSL_MAGENTA.hue, HSL_MAGENTA.saturation, HSL_MAGENTA.lightness);
    expect(teal).toStrictEqual(RGB_MAGENTA);
  });
});
