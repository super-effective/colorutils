import hexToHsv from '../hexToHsv';
import { HEX_TEAL,
  HSV_TEAL,
  HSV_WHITE,
  HEX_WHITE,
  HSV_BLACK,
  HEX_BLACK,
  HEX_RED,
  HSV_RED,
  HEX_YELLOW,
  HSV_YELLOW,
  HEX_GREEN,
  HSV_GREEN,
  HEX_CYAN,
  HSV_CYAN,
  HEX_BLUE,
  HSV_BLUE,
  HEX_MAGENTA,
  HSV_MAGENTA,
} from './data/colors';

/**
 * HEX to HSV
 */
describe('hexToHsv', () => {
  test('hexToHsv - color', () => {
    const teal = hexToHsv(HEX_TEAL);
    expect(teal).toStrictEqual(HSV_TEAL);
  });

  test('hexToHsv - white short', () => {
    const white = hexToHsv('#fff');
    expect(white).toStrictEqual(HSV_WHITE);
  });

  test('hexToHsv - white long', () => {
    const white = hexToHsv(HEX_WHITE);
    expect(white).toStrictEqual(HSV_WHITE);
  });

  test('hexToHsv - black short', () => {
    const white = hexToHsv('#000');
    expect(white).toStrictEqual(HSV_BLACK);
  });

  test('hexToHsv - black long', () => {
    const white = hexToHsv(HEX_BLACK);
    expect(white).toStrictEqual(HSV_BLACK);
  });

  test('hexToHsv - short length throws an error', () => {
    expect(() => hexToHsv('#00')).toThrow(Error);
  });

  test('hexToHsv - long length throws an error', () => {
    expect(() => hexToHsv('#0000000')).toThrow(Error);
  });

  test('hexToHsv - invalid hex', () => {
    expect(() => hexToHsv('#j@0000')).toThrow(Error);
  });

  test('hexToHsv - red', () => {
    const teal = hexToHsv(HEX_RED);
    expect(teal).toStrictEqual(HSV_RED);
  });

  test('hexToHsv - yellow', () => {
    const teal = hexToHsv(HEX_YELLOW);
    expect(teal).toStrictEqual(HSV_YELLOW);
  });

  test('hexToHsv - green', () => {
    const teal = hexToHsv(HEX_GREEN);
    expect(teal).toStrictEqual(HSV_GREEN);
  });

  test('hexToHsv - cyan', () => {
    const teal = hexToHsv(HEX_CYAN);
    expect(teal).toStrictEqual(HSV_CYAN);
  });

  test('hexToHsv - blue', () => {
    const teal = hexToHsv(HEX_BLUE);
    expect(teal).toStrictEqual(HSV_BLUE);
  });

  test('hexToHsv - magenta', () => {
    const teal = hexToHsv(HEX_MAGENTA);
    expect(teal).toStrictEqual(HSV_MAGENTA);
  });
});
