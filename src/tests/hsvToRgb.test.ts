import hsvToRgb from '../hsvToRgb';
import { HSV_TEAL,
  RGB_TEAL,
  HSV_WHITE,
  RGB_WHITE,
  HSV_BLACK,
  RGB_BLACK,
  HSV_RED,
  RGB_RED,
  HSV_YELLOW,
  RGB_YELLOW,
  HSV_GREEN,
  RGB_GREEN,
  HSV_CYAN,
  RGB_CYAN,
  HSV_BLUE,
  RGB_BLUE,
  HSV_MAGENTA,
  RGB_MAGENTA,
} from './data/colors';

/**
 * HSV to RGB
 */
describe('hsvToRgb', () => {
  test('hsvToRgb - color', () => {
    const teal = hsvToRgb(HSV_TEAL.hue, HSV_TEAL.saturation, HSV_TEAL.value);
    expect(teal).toStrictEqual(RGB_TEAL);
  });

  test('hsvToRgb - white', () => {
    const white = hsvToRgb(HSV_WHITE.hue, HSV_WHITE.saturation, HSV_WHITE.value);
    expect(white).toStrictEqual(RGB_WHITE);
  });

  test('hsvToRgb - black', () => {
    const black = hsvToRgb(HSV_BLACK.hue, HSV_BLACK.saturation, HSV_BLACK.value);
    expect(black).toStrictEqual(RGB_BLACK);
  });

  // Bounds checks
  test('hsvToRgb - invalid hue, < 0', () => {
    expect(() => hsvToRgb(-1, HSV_RED.saturation, HSV_RED.value)).toThrow(Error);
  });

  test('hsvToRgb - invalid hue, > 1', () => {
    expect(() => hsvToRgb(361, HSV_RED.saturation, HSV_RED.value)).toThrow(Error);
  });

  test('hsvToRgb - invalid saturation, < 0', () => {
    expect(() => hsvToRgb(HSV_RED.hue, -1, HSV_RED.value)).toThrow(Error);
  });

  test('hsvToRgb - invalid saturation, > 1', () => {
    expect(() => hsvToRgb(HSV_RED.hue, 1.1, HSV_RED.value)).toThrow(Error);
  });

  test('hsvToRgb - invalid value, < 0', () => {
    expect(() => hsvToRgb(HSV_RED.hue, HSV_RED.saturation, -1)).toThrow(Error);
  });

  test('hsvToRgb - invalid value, > 1', () => {
    expect(() => hsvToRgb(HSV_RED.hue, HSV_RED.saturation, 1.1)).toThrow(Error);
  });

  // Color ranges
  test('hsvToRgb - red', () => {
    const teal = hsvToRgb(HSV_RED.hue, HSV_RED.saturation, HSV_RED.value);
    expect(teal).toStrictEqual(RGB_RED);
  });

  test('hsvToRgb - yellow', () => {
    const teal = hsvToRgb(HSV_YELLOW.hue, HSV_YELLOW.saturation, HSV_YELLOW.value);
    expect(teal).toStrictEqual(RGB_YELLOW);
  });

  test('hsvToRgb - green', () => {
    const teal = hsvToRgb(HSV_GREEN.hue, HSV_GREEN.saturation, HSV_GREEN.value);
    expect(teal).toStrictEqual(RGB_GREEN);
  });

  test('hsvToRgb - cyan', () => {
    const teal = hsvToRgb(HSV_CYAN.hue, HSV_CYAN.saturation, HSV_CYAN.value);
    expect(teal).toStrictEqual(RGB_CYAN);
  });

  test('hsvToRgb - blue', () => {
    const teal = hsvToRgb(HSV_BLUE.hue, HSV_BLUE.saturation, HSV_BLUE.value);
    expect(teal).toStrictEqual(RGB_BLUE);
  });

  test('hsvToRgb - magenta', () => {
    const teal = hsvToRgb(HSV_MAGENTA.hue, HSV_MAGENTA.saturation, HSV_MAGENTA.value);
    expect(teal).toStrictEqual(RGB_MAGENTA);
  });
});
