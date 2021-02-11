import calculate from '../calculate';

describe('calculate', () => {
  it('Sets all states to null when buttonName is "AC"', () => {
    const data = { total: 0, next: 23, operation: 'x' };
    expect(calculate(data, 'AC')).toStrictEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('Changes sign of total when next is null and buttonName is "+/-"', () => {
    const data = { total: 20, next: null, operation: 'x' };
    expect(calculate(data, '+/-')).toStrictEqual({
      total: '-20',
      next: null,
      operation: 'x',
    });
  });

  it('Changes sign of next if next is NOT null and buttonName is "+/-"', () => {
    const data = { total: 20, next: 30, operation: 'x' };
    expect(calculate(data, '+/-')).toStrictEqual({
      total: 20,
      next: '-30',
      operation: 'x',
    });
  });

  it('Changes the total to a percentage when next is null and buttonName is "%"', () => {
    const data = { total: 20, next: null, operation: 'x' };
    expect(calculate(data, '%')).toStrictEqual({
      total: '0.2',
      next: null,
      operation: 'x',
    });
  });

  it('Changes the next to a percentage when next is NOT null and buttonName is "%"', () => {
    const data = { total: 20, next: 30, operation: 'x' };
    expect(calculate(data, '%')).toStrictEqual({
      total: 20,
      next: '0.3',
      operation: 'x',
    });
  });

  it('Sets total to operation result, next to null and operation to "+" when buttonName is "+"', () => {
    const data = { total: '2', next: '4', operation: 'x' };
    expect(calculate(data, '+')).toStrictEqual({
      total: '8',
      next: null,
      operation: '+',
    });
  });

  it('Appends to the next when buttonName is a number', () => {
    const data = { total: '2', next: '4', operation: 'x' };
    expect(calculate(data, '7')).toStrictEqual({
      total: '2',
      next: '47',
      operation: 'x',
    });
  });
});
