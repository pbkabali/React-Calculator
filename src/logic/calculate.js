const calculate = (calculatorData, buttonName) => {
  let { total, next } = calculatorData;
  const { operation } = calculatorData;
  switch (buttonName) {
    case '+/-':
      next *= -1;
      total *= -1;
      break;
    default:
      break;
  }
  return { total, next, operation };
};

export default calculate;
