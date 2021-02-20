import hexToRgb from '../hexToRgb';
import {
  HEX_TEAL,
  RGB_TEAL,
  RGB_WHITE,
  HEX_WHITE,
  RGB_BLACK,
  HEX_BLACK,
} from './data/colors';

/**
 * HEX to RGB
 */
describe('hexToRgb', () => {
  test('hexToRgb - color', () => {
    const teal = hexToRgb(HEX_TEAL);
    expect(teal).toStrictEqual(RGB_TEAL);
  });


  test('hexToRgb - white short', () => {
    const white = hexToRgb('#fff');
    expect(white).toStrictEqual(RGB_WHITE);
  });

  test('hexToRgb - white long', () => {
    const white = hexToRgb(HEX_WHITE);
    expect(white).toStrictEqual(RGB_WHITE);
  });

  test('hexToRgb - black short', () => {
    const white = hexToRgb('#000');
    expect(white).toStrictEqual(RGB_BLACK);
  });

  test('hexToRgb - black long', () => {
    const white = hexToRgb(HEX_BLACK);
    expect(white).toStrictEqual(RGB_BLACK);
  });

  test('hexToRgb - short length throws an error', () => {
    expect(() => hexToRgb('#00')).toThrow(Error);
  });

  test('hexToRgb - long length throws an error', () => {
    expect(() => hexToRgb('#0000000')).toThrow(Error);
  });

  test('hexToRgb - invalid hex', () => {
    expect(() => hexToRgb('#j@0000')).toThrow(Error);
  });
});
