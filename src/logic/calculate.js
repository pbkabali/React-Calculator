import Big from 'big.js';
import operate from './operate';

const calculate = (calculatorData, buttonName) => {
  let { total, next, operation } = calculatorData;

  if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  } else if (total === 'Error') {
    return { total, next, operation };
  } else {
    switch (buttonName) {
      case '+':
      case '-':
      case 'X':
      case '/':
      case '=':
        if (operation === null && total != null && next != null) {
          total = Big(next).toString();
        } else if (total === null && next === null && buttonName !== '=') {
          total = '0';
        } else if (total === null) {
          total = next;
        } else if (next !== null) {
          total = operate(total, next, operation);
        }
        if (buttonName === '=') {
          operation = null;
        } else {
          operation = buttonName;
        }
        next = null;
        break;
      case '+/-':
      case '%':
        if (next !== null) {
          next = operate(next, 0, buttonName);
        } else if (total !== null) {
          total = operate(total, 0, buttonName);
        }
        break;
      default:
        next = next === null ? buttonName : next + buttonName;
    }
  }

  return { total, next, operation };
};

export default calculate;
