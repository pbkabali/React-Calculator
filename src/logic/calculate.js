import operate from './operate';

const calculate = (calculatorData, buttonName) => {
  let { total, next, operation } = calculatorData;
  switch (buttonName) {
    case 'AC':
      total = '';
      next = '';
      operation = null;
      break;
    case '+':
    case '-':
    case 'X':
    case '/':
    case '=':
      if (operation === null && buttonName === '=') {
        if (next === '') {
          break;
        } else {
          total = next;
        }
      } else if (total === '') {
        total = next;
      } else if (next !== '') {
        total = operate(total, next, operation);
      }
      if (buttonName === '=') {
        operation = null;
      } else {
        operation = buttonName;
      }
      next = '';
      break;
    case '+/-':
    case '%':
      if (next !== '') {
        next = operate(next, 0, buttonName);
      } else if (total !== '') {
        total = operate(total, 0, buttonName);
      }
      break;
    default:
      next += buttonName;
  }
  return { total, next, operation };
};

export default calculate;
