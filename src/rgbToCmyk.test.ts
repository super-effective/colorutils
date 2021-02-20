import rgbToCmyk from './rgbToCmyk';
import {
  CMYK_BLACK,
  CMYK_BLUE,
  CMYK_GREEN,
  CMYK_RED,
  CMYK_TEAL,
  RGB_BLACK,
  RGB_BLUE,
  RGB_GREEN,
  RGB_RED,
  RGB_TEAL,
} from './testData/colors';

/**
 * RGB to CMYK
 */
describe('rgbToCmyk', () => {
  test('rgbToCmyk - multi value', () => {
    const teal = rgbToCmyk(RGB_TEAL.red, RGB_TEAL.green, RGB_TEAL.blue);
    expect(teal).toStrictEqual(CMYK_TEAL);
  });

  test('rgbToCmyk - red', () => {
    const red = rgbToCmyk(RGB_RED.red, RGB_RED.green, RGB_RED.blue);
    expect(red).toStrictEqual(CMYK_RED);
  });

  test('rgbToCmyk - green', () => {
    const green = rgbToCmyk(RGB_GREEN.red, RGB_GREEN.green, RGB_GREEN.blue);
    expect(green).toStrictEqual(CMYK_GREEN);
  });

  test('rgbToCmyk - blue', () => {
    const blue = rgbToCmyk(RGB_BLUE.red, RGB_BLUE.green, RGB_BLUE.blue);
    expect(blue).toStrictEqual(CMYK_BLUE);
  });

  test('rgbToCmyk - black', () => {
    const black = rgbToCmyk(RGB_BLACK.red, RGB_BLACK.green, RGB_BLACK.blue);
    expect(black).toStrictEqual(CMYK_BLACK);
  });
});
