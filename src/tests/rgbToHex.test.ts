import rgbToHex from '../rgbToHex';
import {
  RGB_TEAL,
  HEX_TEAL,
  RGB_WHITE,
  HEX_WHITE,
  RGB_BLACK,
  HEX_BLACK,
} from './data/colors';

/**
 * RGB to HEX
 */
describe('rgbToHex', () => {
  test('rgbToHex - multi value', () => {
    const teal = rgbToHex(RGB_TEAL.red, RGB_TEAL.green, RGB_TEAL.blue);
    expect(teal).toBe(HEX_TEAL);
  });

  test('rgbToHex - white', () => {
    const white = rgbToHex(RGB_WHITE.red, RGB_WHITE.green, RGB_WHITE.blue);
    expect(white).toBe(HEX_WHITE);
  });

  test('rgbToHex - black', () => {
    const black = rgbToHex(RGB_BLACK.red, RGB_BLACK.green, RGB_BLACK.blue);
    expect(black).toBe(HEX_BLACK);
  });
});
