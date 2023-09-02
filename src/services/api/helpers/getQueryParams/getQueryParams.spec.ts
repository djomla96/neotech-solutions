import getQueryParams from './getQueryParams';

describe('getQueryParams', () => {
  it('should create a value query param object', () => {
    expect(
      getQueryParams({
        page: 1,
        isValid: false,
        param: 'valid',
      }),
    ).toBe('page=1&isValid=false&param=valid');
  });

  it('should return empty string if object is empty', () => {
    expect(getQueryParams({})).toBe('');
  });

  it('should not return param if value is nullish', () => {
    expect(
      getQueryParams({
        page: 1,
        isValid: undefined,
      }),
    ).toBe('page=1');
  });
});
