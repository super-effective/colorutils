import hexToHsl from '../hexToHsl';
import {
  HEX_TEAL,
  HEX_WHITE,
  HEX_BLACK,
  HEX_RED,
  HEX_YELLOW,
  HEX_GREEN,
  HEX_CYAN,
  HEX_BLUE,
  HEX_MAGENTA,
  HSL_BLACK,
  HSL_BLUE,
  HSL_CYAN,
  HSL_GREEN,
  HSL_MAGENTA,
  HSL_RED,
  HSL_TEAL,
  HSL_WHITE,
  HSL_YELLOW,
} from './data/colors';

/**
 * HEX to HSL
 */
describe('hexToHsl', () => {
  test('hexToHsl - color', () => {
    const teal = hexToHsl(HEX_TEAL);
    expect(teal).toStrictEqual(HSL_TEAL);
  });

  test('hexToHsl - white short', () => {
    const white = hexToHsl('#fff');
    expect(white).toStrictEqual(HSL_WHITE);
  });

  test('hexToHsl - white long', () => {
    const white = hexToHsl(HEX_WHITE);
    expect(white).toStrictEqual(HSL_WHITE);
  });

  test('hexToHsl - black short', () => {
    const white = hexToHsl('#000');
    expect(white).toStrictEqual(HSL_BLACK);
  });

  test('hexToHsl - black long', () => {
    const white = hexToHsl(HEX_BLACK);
    expect(white).toStrictEqual(HSL_BLACK);
  });

  test('hexToHsl - short length throws an error', () => {
    expect(() => hexToHsl('#00')).toThrow(Error);
  });

  test('hexToHsl - long length throws an error', () => {
    expect(() => hexToHsl('#0000000')).toThrow(Error);
  });

  test('hexToHsl - invalid hex', () => {
    expect(() => hexToHsl('#j@0000')).toThrow(Error);
  });

  test('hexToHsl - red', () => {
    const teal = hexToHsl(HEX_RED);
    expect(teal).toStrictEqual(HSL_RED);
  });

  test('hexToHsl - yellow', () => {
    const teal = hexToHsl(HEX_YELLOW);
    expect(teal).toStrictEqual(HSL_YELLOW);
  });

  test('hexToHsl - green', () => {
    const teal = hexToHsl(HEX_GREEN);
    expect(teal).toStrictEqual(HSL_GREEN);
  });

  test('hexToHsl - cyan', () => {
    const teal = hexToHsl(HEX_CYAN);
    expect(teal).toStrictEqual(HSL_CYAN);
  });

  test('hexToHsl - blue', () => {
    const teal = hexToHsl(HEX_BLUE);
    expect(teal).toStrictEqual(HSL_BLUE);
  });

  test('hexToHsl - magenta', () => {
    const teal = hexToHsl(HEX_MAGENTA);
    expect(teal).toStrictEqual(HSL_MAGENTA);
  });
});
