import cmykToHex from '../cmykToHex';
import {
  CMYK_BLACK,
  CMYK_BLUE,
  CMYK_GREEN,
  CMYK_RED,
  CMYK_TEAL,
  HEX_BLACK,
  HEX_BLUE,
  HEX_GREEN,
  HEX_RED,
  HEX_TEAL,
} from './data/colors';

/**
 * CMYK to HEX
 */
describe('cmykToHex', () => {
  test('cmykToHex - multi value', () => {
    const teal = cmykToHex(CMYK_TEAL.cyan, CMYK_TEAL.magenta, CMYK_TEAL.yellow, CMYK_TEAL.black);
    expect(teal).toStrictEqual(HEX_TEAL);
  });

  test('cmykToHex - red', () => {
    const red = cmykToHex(CMYK_RED.cyan, CMYK_RED.magenta, CMYK_RED.yellow, CMYK_RED.black);
    expect(red).toStrictEqual(HEX_RED);
  });

  test('cmykToHex - green', () => {
    const green = cmykToHex(CMYK_GREEN.cyan, CMYK_GREEN.magenta, CMYK_GREEN.yellow, CMYK_GREEN.black);
    expect(green).toStrictEqual(HEX_GREEN);
  });

  test('cmykToHex - blue', () => {
    const blue = cmykToHex(CMYK_BLUE.cyan, CMYK_BLUE.magenta, CMYK_BLUE.yellow, CMYK_BLUE.black);
    expect(blue).toStrictEqual(HEX_BLUE);
  });

  test('cmykToHex - black', () => {
    const black = cmykToHex(CMYK_BLACK.cyan, CMYK_BLACK.magenta, CMYK_BLACK.yellow, CMYK_BLACK.black);
    expect(black).toStrictEqual(HEX_BLACK);
  });
});
