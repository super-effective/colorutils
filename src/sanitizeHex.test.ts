import sanitizeHex from './sanitizeHex';
import { HEX_BLACK } from './testData/colors';

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
