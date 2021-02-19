import getPerceivedLuminance from './getPerceivedLuminance';
import {
  RGB_TEAL,
  RGB_WHITE,
  RGB_BLACK,
} from './testData/colors';

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
