import {
  getPerceivedLuminance,
  hexToRgb,
  hexToHsv,
  hsvToHex,
  hsvToRgb,
  rgbToHex,
  sanitizeHex,
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
describe('getPerceivedLuminance', () => {
  test('getPerceivedLuminance - color', () => {
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
});


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

/**
 * HSV to RGB
 */
describe('hsvToRgb', () => {
  test('hsvToRgb - color', () => {
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
});


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

/**
 * Sanitize Hex String
 */
describe('sanitizeHex', () => {
  test('sanitizeHex - clean input', () => {
    const validHex = '#ffffff';
    const sanitizedHex = sanitizeHex(validHex);
    expect(sanitizedHex).toStrictEqual(validHex);
  });

  test('sanitizeHex - empty', () => {
    const empty = '';
    const sanitizedHex = sanitizeHex(empty);
    expect(sanitizedHex).toStrictEqual(HEX_BLACK);
  });

  test('sanitizeHex - 1 character', () => {
    const one = '1';
    const sanitizedHex = sanitizeHex(one);
    expect(sanitizedHex).toStrictEqual('#111111');
  });

  test('sanitizeHex - 2 characters', () => {
    const two = '12';
    const sanitizedHex = sanitizeHex(two);
    expect(sanitizedHex).toStrictEqual('#111222');
  });

  test('sanitizeHex - 3 characters', () => {
    const three = '123';
    const sanitizedHex = sanitizeHex(three);
    expect(sanitizedHex).toStrictEqual('#112233');
  });

  test('sanitizeHex - 4 characters', () => {
    const four = '1234';
    const sanitizedHex = sanitizeHex(four);
    expect(sanitizedHex).toStrictEqual('#112233');
  });

  test('sanitizeHex - > 6 characters', () => {
    const tooLong = '#cedefffffffffe123';
    const sanitizedHex = sanitizeHex(tooLong);
    expect(sanitizedHex).toStrictEqual('#cedeff');
  });

  test('sanitizeHex - invalid chars', () => {
    const invalidAtStart = 'Z`*(;3#%^21|/"32&1';
    const sanitizedHex = sanitizeHex(invalidAtStart);
    expect(sanitizedHex).toStrictEqual('#321321');
  });
});

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