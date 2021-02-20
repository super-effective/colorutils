import {
  HEX_BLACK,
  HEX_BLUE,
  HEX_GREEN,
  HEX_RED,
  HEX_TEAL,
  HEX_WHITE,
  HSV_BLACK,
  HSV_BLUE,
  HSV_GREEN,
  HSV_RED,
  HSV_TEAL,
  HSV_WHITE,
} from './data/colors';

import {
  hexToHsv,
  hsvToHex,
} from '../colorutils';

describe('Consistency checks', () => {
  test('hex > hsv > hex - teal', () => {
    const startHex = HEX_TEAL;
    const hsv = hexToHsv(startHex);
    const hex = hsvToHex(hsv.hue, hsv.saturation, hsv.value);

    expect(hex).toStrictEqual(startHex);
  });

  test('hex > hsv > hex - red', () => {
    const startHex = HEX_RED;
    const hsv = hexToHsv(startHex);
    const hex = hsvToHex(hsv.hue, hsv.saturation, hsv.value);

    expect(hex).toStrictEqual(startHex);
  });

  test('hex > hsv > hex - green', () => {
    const startHex = HEX_GREEN;
    const hsv = hexToHsv(startHex);
    const hex = hsvToHex(hsv.hue, hsv.saturation, hsv.value);

    expect(hex).toStrictEqual(startHex);
  });

  test('hex > hsv > hex - blue', () => {
    const startHex = HEX_BLUE;
    const hsv = hexToHsv(startHex);
    const hex = hsvToHex(hsv.hue, hsv.saturation, hsv.value);

    expect(hex).toStrictEqual(startHex);
  });

  test('hex > hsv > hex - black', () => {
    const startHex = HEX_BLACK;
    const hsv = hexToHsv(startHex);
    const hex = hsvToHex(hsv.hue, hsv.saturation, hsv.value);

    expect(hex).toStrictEqual(startHex);
  });

  test('hex > hsv > hex - white', () => {
    const startHex = HEX_WHITE;
    const hsv = hexToHsv(startHex);
    const hex = hsvToHex(hsv.hue, hsv.saturation, hsv.value);

    expect(hex).toStrictEqual(startHex);
  });


  test('hsv > hex > hsv - teal', () => {
    const startHsv = HSV_TEAL;
    const hex = hsvToHex(startHsv.hue, startHsv.saturation, startHsv.value);
    const hsv = hexToHsv(hex);

    expect(hsv).toStrictEqual(startHsv);
  });

  test('hsv > hex > hsv - red', () => {
    const startHsv = HSV_RED;
    const hex = hsvToHex(startHsv.hue, startHsv.saturation, startHsv.value);
    const hsv = hexToHsv(hex);

    expect(hsv).toStrictEqual(startHsv);
  });

  test('hsv > hex > hsv - green', () => {
    const startHsv = HSV_GREEN;
    const hex = hsvToHex(startHsv.hue, startHsv.saturation, startHsv.value);
    const hsv = hexToHsv(hex);

    expect(hsv).toStrictEqual(startHsv);
  });

  test('hsv > hex > hsv - blue', () => {
    const startHsv = HSV_BLUE;
    const hex = hsvToHex(startHsv.hue, startHsv.saturation, startHsv.value);
    const hsv = hexToHsv(hex);

    expect(hsv).toStrictEqual(startHsv);
  });

  test('hsv > hex > hsv - black', () => {
    const startHsv = HSV_BLACK;
    const hex = hsvToHex(startHsv.hue, startHsv.saturation, startHsv.value);
    const hsv = hexToHsv(hex);

    expect(hsv).toStrictEqual(startHsv);
  });

  test('hsv > hex > hsv - white', () => {
    const startHsv = HSV_WHITE;
    const hex = hsvToHex(startHsv.hue, startHsv.saturation, startHsv.value);
    const hsv = hexToHsv(hex);

    expect(hsv).toStrictEqual(startHsv);
  });
});
