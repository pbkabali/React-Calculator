import operate from './operate';

const calculate = (calculatorData, buttonName) => {
  let { total, next, operation } = calculatorData;
  switch (buttonName) {
    case 'AC':
      total = null;
      next = null;
      operation = null;
      break;
    case '+':
    case '-':
    case 'X':
    case '/':
    case '=':
      if (operation === null && buttonName === '=') {
        if (next === null) {
          break;
        } else {
          total = next;
        }
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
  return { total, next, operation };
};

export default calculate;
