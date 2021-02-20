import cmykToRgb from '../cmykToRgb';
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
} from './data/colors';

/**
 * CMYK to RGB
 */
describe('cmykToRgb', () => {
  test('cmykToRgb - multi value', () => {
    const teal = cmykToRgb(CMYK_TEAL.cyan, CMYK_TEAL.magenta, CMYK_TEAL.yellow, CMYK_TEAL.black);
    expect(teal).toStrictEqual(RGB_TEAL);
  });

  test('cmykToRgb - red', () => {
    const red = cmykToRgb(CMYK_RED.cyan, CMYK_RED.magenta, CMYK_RED.yellow, CMYK_RED.black);
    expect(red).toStrictEqual(RGB_RED);
  });

  test('cmykToRgb - green', () => {
    const green = cmykToRgb(CMYK_GREEN.cyan, CMYK_GREEN.magenta, CMYK_GREEN.yellow, CMYK_GREEN.black);
    expect(green).toStrictEqual(RGB_GREEN);
  });

  test('cmykToRgb - blue', () => {
    const blue = cmykToRgb(CMYK_BLUE.cyan, CMYK_BLUE.magenta, CMYK_BLUE.yellow, CMYK_BLUE.black);
    expect(blue).toStrictEqual(RGB_BLUE);
  });

  test('cmykToRgb - black', () => {
    const black = cmykToRgb(CMYK_BLACK.cyan, CMYK_BLACK.magenta, CMYK_BLACK.yellow, CMYK_BLACK.black);
    expect(black).toStrictEqual(RGB_BLACK);
  });
});
