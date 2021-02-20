import hexToCmyk from './hexToCmyk';
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
} from './testData/colors';

/**
 * RGB to CMYK
 */
describe('hexToCmyk', () => {
  test('hexToCmyk - multi value', () => {
    const teal = hexToCmyk(HEX_TEAL);
    expect(teal).toStrictEqual(CMYK_TEAL);
  });

  test('hexToCmyk - red', () => {
    const red = hexToCmyk(HEX_RED);
    expect(red).toStrictEqual(CMYK_RED);
  });

  test('hexToCmyk - green', () => {
    const green = hexToCmyk(HEX_GREEN);
    expect(green).toStrictEqual(CMYK_GREEN);
  });

  test('hexToCmyk - blue', () => {
    const blue = hexToCmyk(HEX_BLUE);
    expect(blue).toStrictEqual(CMYK_BLUE);
  });

  test('hexToCmyk - black', () => {
    const black = hexToCmyk(HEX_BLACK);
    expect(black).toStrictEqual(CMYK_BLACK);
  });
});
