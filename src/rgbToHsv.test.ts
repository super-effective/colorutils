import rgbToHsv from './rgbToHsv';
import {
  RGB_BLACK,
  RGB_BLUE,
  RGB_GREEN,
  RGB_RED,
  RGB_TEAL,
  HSV_BLUE,
  HSV_GREEN,
  HSV_RED,
  HSV_TEAL,
  HSV_BLACK,
} from './testData/colors';

/**
 * RGB to HSV
 */
describe('rgbToHsv', () => {
  test('rgbToHsv - multi value', () => {
    const teal = rgbToHsv(RGB_TEAL.red, RGB_TEAL.green, RGB_TEAL.blue);
    expect(teal).toStrictEqual(HSV_TEAL);
  });

  test('rgbToHsv - red', () => {
    const red = rgbToHsv(RGB_RED.red, RGB_RED.green, RGB_RED.blue);
    expect(red).toStrictEqual(HSV_RED);
  });

  test('rgbToHsv - green', () => {
    const green = rgbToHsv(RGB_GREEN.red, RGB_GREEN.green, RGB_GREEN.blue);
    expect(green).toStrictEqual(HSV_GREEN);
  });

  test('rgbToHsv - blue', () => {
    const blue = rgbToHsv(RGB_BLUE.red, RGB_BLUE.green, RGB_BLUE.blue);
    expect(blue).toStrictEqual(HSV_BLUE);
  });

  test('rgbToHsv - black', () => {
    const black = rgbToHsv(RGB_BLACK.red, RGB_BLACK.green, RGB_BLACK.blue);
    expect(black).toStrictEqual(HSV_BLACK);
  });
});
