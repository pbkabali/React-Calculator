import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result = Big(0);
  const [x, y] = [Big(numberOne), Big(numberTwo)];
  switch (operation) {
    case '+':
      result = x.plus(y);
      break;

    case '-':
      result = x.minus(y);
      break;

    case 'X':
      result = x.times(y);
      break;

    case '/':
      result = x.div(y);
      break;

    case '%':
      result = x.div(100);
      break;

    default:
      break;
  }
  return result.toNumber();
};

export default operate;
