import {
  getPerceivedLuminance,
  hexToRgb,
  hexToHsv,
  hsvToHex,
  hsvToRgb,
  rgbToHex,
} from './colorutils';

// Known HEX Values
const HEX_TEAL = '#3cd6bf';
const HEX_WHITE = '#ffffff';
const HEX_BLACK = '#000000';
const HEX_RED = '#ff0000';
const HEX_YELLOW = '#ffff00';
const HEX_GREEN = '#00ff00';
const HEX_CYAN = '#00ffff';
const HEX_BLUE = '#0000ff';
const HEX_MAGENTA = '#ff00ff';


// Known RGB Values
const RGB_TEAL = {
  red: 60,
  green: 214,
  blue: 191,
};

const RGB_WHITE = {
  red: 255,
  green: 255,
  blue: 255,
};

const RGB_BLACK = {
  red: 0,
  green: 0,
  blue: 0,
};

const RGB_RED = {
  red: 255,
  green: 0,
  blue: 0,
};

const RGB_YELLOW = {
  red: 255,
  green: 255,
  blue: 0,
};

const RGB_GREEN = {
  red: 0,
  green: 255,
  blue: 0,
};

const RGB_CYAN = {
  red: 0,
  green: 255,
  blue: 255,
};

const RGB_BLUE = {
  red: 0,
  green: 0,
  blue: 255,
};

const RGB_MAGENTA = {
  red: 255,
  green: 0,
  blue: 255,
};


// Known HSV Values
const HSV_TEAL = {
  hue: 171.03896103896102,
  saturation: 0.7196261682242991,
  value: 0.8392156862745098,
};

const HSV_WHITE = {
  hue: 0,
  saturation: 0,
  value: 1,
};

const HSV_BLACK = {
  hue: 0,
  saturation: 0,
  value: 0,
};

const HSV_RED = {
  hue: 0,
  saturation: 1,
  value: 1,
};

const HSV_YELLOW = {
  hue: 60,
  saturation: 1,
  value: 1,
};

const HSV_GREEN = {
  hue: 120,
  saturation: 1,
  value: 1,
};

const HSV_CYAN = {
  hue: 180,
  saturation: 1,
  value: 1,
};

const HSV_BLUE = {
  hue: 240,
  saturation: 1,
  value: 1,
};

const HSV_MAGENTA = {
  hue: 300,
  saturation: 1,
  value: 1,
};

/**
 * Get Perceptive Luminesces
 */
test('getPerceivedLuminance', () => {
  const pl = getPerceivedLuminance(RGB_TEAL.red, RGB_TEAL.green, RGB_TEAL.blue);
  expect(pl).toBe(0.6483607843137255);
});

test('getPerceivedLuminance - white', () => {
  const pl = getPerceivedLuminance(RGB_WHITE.red, RGB_WHITE.green, RGB_WHITE.blue);
  expect(pl).toBe(1);
});

test('getPerceivedLuminance - black', () => {
  const pl = getPerceivedLuminance(RGB_BLACK.red, RGB_BLACK.green, RGB_BLACK.blue);
  expect(pl).toBe(0);
});


/**
 * HEX to RGB
 */
test('hexToRgb', () => {
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


/**
 * HEX to HSV
 */
test('hexToHsv', () => {
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


/**
 * HSV to HEX
 */
test('hsvToHex', () => {
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

/**
 * HSV to RGB
 */
test('hsvToRgb', () => {
  const teal = hsvToRgb(HSV_TEAL.hue, HSV_TEAL.saturation, HSV_TEAL.value);
  expect(teal).toStrictEqual(RGB_TEAL);
});

test('hsvToRgb - white', () => {
  const white = hsvToRgb(HSV_WHITE.hue, HSV_WHITE.saturation, HSV_WHITE.value);
  expect(white).toStrictEqual(RGB_WHITE);
});

test('hsvToRgb - black', () => {
  const black = hsvToRgb(HSV_BLACK.hue, HSV_BLACK.saturation, HSV_BLACK.value);
  expect(black).toStrictEqual(RGB_BLACK);
});

// Bounds checks
test('hsvToRgb - invalid hue, < 0', () => {
  expect(() => hsvToRgb(-1, HSV_RED.saturation, HSV_RED.value)).toThrow(Error);
});

test('hsvToRgb - invalid hue, > 1', () => {
  expect(() => hsvToRgb(361, HSV_RED.saturation, HSV_RED.value)).toThrow(Error);
});

test('hsvToRgb - invalid saturation, < 0', () => {
  expect(() => hsvToRgb(HSV_RED.hue, -1, HSV_RED.value)).toThrow(Error);
});

test('hsvToRgb - invalid saturation, > 1', () => {
  expect(() => hsvToRgb(HSV_RED.hue, 1.1, HSV_RED.value)).toThrow(Error);
});

test('hsvToRgb - invalid value, < 0', () => {
  expect(() => hsvToRgb(HSV_RED.hue, HSV_RED.saturation, -1)).toThrow(Error);
});

test('hsvToRgb - invalid value, > 1', () => {
  expect(() => hsvToRgb(HSV_RED.hue, HSV_RED.saturation, 1.1)).toThrow(Error);
});


// Color ranges
test('hsvToRgb - red', () => {
  const teal = hsvToRgb(HSV_RED.hue, HSV_RED.saturation, HSV_RED.value);
  expect(teal).toStrictEqual(RGB_RED);
});

test('hsvToRgb - yellow', () => {
  const teal = hsvToRgb(HSV_YELLOW.hue, HSV_YELLOW.saturation, HSV_YELLOW.value);
  expect(teal).toStrictEqual(RGB_YELLOW);
});

test('hsvToRgb - green', () => {
  const teal = hsvToRgb(HSV_GREEN.hue, HSV_GREEN.saturation, HSV_GREEN.value);
  expect(teal).toStrictEqual(RGB_GREEN);
});

test('hsvToRgb - cyan', () => {
  const teal = hsvToRgb(HSV_CYAN.hue, HSV_CYAN.saturation, HSV_CYAN.value);
  expect(teal).toStrictEqual(RGB_CYAN);
});

test('hsvToRgb - blue', () => {
  const teal = hsvToRgb(HSV_BLUE.hue, HSV_BLUE.saturation, HSV_BLUE.value);
  expect(teal).toStrictEqual(RGB_BLUE);
});

test('hsvToRgb - magenta', () => {
  const teal = hsvToRgb(HSV_MAGENTA.hue, HSV_MAGENTA.saturation, HSV_MAGENTA.value);
  expect(teal).toStrictEqual(RGB_MAGENTA);
});


/**
 * RGB to HEX
 */
test('rgbToHex', () => {
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
