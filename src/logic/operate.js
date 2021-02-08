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

    case 'x':
      result = x.times(y);
      break;

    case '/':
      result = numberTwo === '0' ? 'Error' : x.div(y);
      break;

    case '%':
      result = x.div(100);
      break;

    case '+/-':
      result = x.times(-1);
      break;

    default:
      result = x;
      break;
  }
  return result.toString();
};

export default operate;
