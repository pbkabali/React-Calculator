import operate from '../operate';

describe('operate', () => {
  it('Automatically performs type conversions and returns a string', () => {
    expect(operate(1, '2', '+')).toBe('3');
  });

  it('Returns the sum of two numbers when passed "+" as operator', () => {
    expect(operate('1', '2', '+')).toBe('3');
  });

  it('Returns the difference of two numbers when passed "-" as operator', () => {
    expect(operate('1', '2', '-')).toBe('-1');
  });

  it('Returns the product of two numbers when passed "x" as operator', () => {
    expect(operate('1', '2', 'x')).toBe('2');
  });

  it('Returns the ratio of two numbers when passed "/" as operator', () => {
    expect(operate('1', '2', '/')).toBe('0.5');
  });

  it('Returns "Error" on performing a division by zero', () => {
    expect(operate('1', '0', '/')).toBe('Error');
  });

  it('Returns first number as a percentage when passed "%" as operator', () => {
    expect(operate('1', '2', '%')).toBe('0.01');
  });

  it('Changes the sign of first number when passed "+/-" as operator', () => {
    expect(operate('1', '2', '+/-')).toBe('-1');
  });

  it('Returns the first number for any unspecified operator', () => {
    expect(operate('1', '2', 'nh')).toBe('1');
  });
});
