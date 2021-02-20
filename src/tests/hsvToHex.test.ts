import hsvToHex from '../hsvToHex';
import {
  HSV_TEAL,
  HEX_TEAL,
  HSV_WHITE,
  HEX_WHITE,
  HSV_BLACK,
  HEX_BLACK,
  HSV_RED,
} from './data/colors';

/**
 * HSV to HEX
 */
describe('hsvToHex', () => {
  test('hsvToHex - color', () => {
    const teal = hsvToHex(HSV_TEAL.hue, HSV_TEAL.saturation, HSV_TEAL.value);
    expect(teal).toBe(HEX_TEAL);
  });

  test('hsvToHex - white', () => {
    const white = hsvToHex(HSV_WHITE.hue, HSV_WHITE.saturation, HSV_WHITE.value);
    expect(white).toBe(HEX_WHITE);
  });

  test('hsvToHex - black', () => {
    const black = hsvToHex(HSV_BLACK.hue, HSV_BLACK.saturation, HSV_BLACK.value);
    expect(black).toBe(HEX_BLACK);
  });

  // Bounds checks
  test('hsvToHex - invalid hue, < 0', () => {
    expect(() => hsvToHex(-1, HSV_RED.saturation, HSV_RED.value)).toThrow(Error);
  });

  test('hsvToHex - invalid hue, > 1', () => {
    expect(() => hsvToHex(361, HSV_RED.saturation, HSV_RED.value)).toThrow(Error);
  });

  test('hsvToHex - invalid saturation, < 0', () => {
    expect(() => hsvToHex(HSV_RED.hue, -1, HSV_RED.value)).toThrow(Error);
  });

  test('hsvToHex - invalid saturation, > 1', () => {
    expect(() => hsvToHex(HSV_RED.hue, 1.1, HSV_RED.value)).toThrow(Error);
  });

  test('hsvToHex - invalid value, < 0', () => {
    expect(() => hsvToHex(HSV_RED.hue, HSV_RED.saturation, -1)).toThrow(Error);
  });

  test('hsvToHex - invalid value, > 1', () => {
    expect(() => hsvToHex(HSV_RED.hue, HSV_RED.saturation, 1.1)).toThrow(Error);
  });
});
