import hslToHex from '../hslToHex';
import {
  HEX_TEAL,
  HEX_WHITE,
  HEX_BLACK,
  HSL_BLACK,
  HSL_RED,
  HSL_TEAL,
  HSL_WHITE,
} from './data/colors';

/**
 * HSL to HEX
 */
describe('hslToHex', () => {
  test('hslToHex - color', () => {
    const teal = hslToHex(HSL_TEAL.hue, HSL_TEAL.saturation, HSL_TEAL.lightness);
    expect(teal).toBe(HEX_TEAL);
  });

  test('hslToHex - white', () => {
    const white = hslToHex(HSL_WHITE.hue, HSL_WHITE.saturation, HSL_WHITE.lightness);
    expect(white).toBe(HEX_WHITE);
  });

  test('hslToHex - black', () => {
    const black = hslToHex(HSL_BLACK.hue, HSL_BLACK.saturation, HSL_BLACK.lightness);
    expect(black).toBe(HEX_BLACK);
  });

  // Bounds checks
  test('hslToHex - invalid hue, < 0', () => {
    expect(() => hslToHex(-1, HSL_RED.saturation, HSL_RED.lightness)).toThrow(Error);
  });

  test('hslToHex - invalid hue, > 1', () => {
    expect(() => hslToHex(361, HSL_RED.saturation, HSL_RED.lightness)).toThrow(Error);
  });

  test('hslToHex - invalid saturation, < 0', () => {
    expect(() => hslToHex(HSL_RED.hue, -1, HSL_RED.lightness)).toThrow(Error);
  });

  test('hslToHex - invalid saturation, > 1', () => {
    expect(() => hslToHex(HSL_RED.hue, 1.1, HSL_RED.lightness)).toThrow(Error);
  });

  test('hslToHex - invalid value, < 0', () => {
    expect(() => hslToHex(HSL_RED.hue, HSL_RED.saturation, -1)).toThrow(Error);
  });

  test('hslToHex - invalid value, > 1', () => {
    expect(() => hslToHex(HSL_RED.hue, HSL_RED.saturation, 1.1)).toThrow(Error);
  });
});
