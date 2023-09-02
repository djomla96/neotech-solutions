import getStringifiedValue from './getStringifiedValue';

describe('getStringifiedValue', () => {
  it('should cancel if nullish value is provided', () => {
    expect(getStringifiedValue(undefined)).toBeFalsy();
  });

  it('should always return string', () => {
    expect(getStringifiedValue(10)).toBe('10');
    expect(getStringifiedValue(true)).toBe('true');
    expect(getStringifiedValue('string')).toBe('string');
  });
});
