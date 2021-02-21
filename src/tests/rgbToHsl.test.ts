import rgbToHsl from '../rgbToHsl';
import {
  RGB_BLACK,
  RGB_BLUE,
  RGB_GREEN,
  RGB_RED,
  RGB_TEAL,
  HSL_BLUE,
  HSL_GREEN,
  HSL_RED,
  HSL_TEAL,
  HSL_BLACK,
} from './data/colors';

/**
 * RGB to HSV
 */
describe('rgbToHsl', () => {
  test('rgbToHsl - multi value', () => {
    const teal = rgbToHsl(RGB_TEAL.red, RGB_TEAL.green, RGB_TEAL.blue);
    expect(teal).toStrictEqual(HSL_TEAL);
  });

  test('rgbToHsl - red', () => {
    const red = rgbToHsl(RGB_RED.red, RGB_RED.green, RGB_RED.blue);
    expect(red).toStrictEqual(HSL_RED);
  });

  test('rgbToHsl - green', () => {
    const green = rgbToHsl(RGB_GREEN.red, RGB_GREEN.green, RGB_GREEN.blue);
    expect(green).toStrictEqual(HSL_GREEN);
  });

  test('rgbToHsl - blue', () => {
    const blue = rgbToHsl(RGB_BLUE.red, RGB_BLUE.green, RGB_BLUE.blue);
    expect(blue).toStrictEqual(HSL_BLUE);
  });

  test('rgbToHsl - black', () => {
    const black = rgbToHsl(RGB_BLACK.red, RGB_BLACK.green, RGB_BLACK.blue);
    expect(black).toStrictEqual(HSL_BLACK);
  });
});
