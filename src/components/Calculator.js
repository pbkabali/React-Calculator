/* eslint-disable react/no-unused-state */

import { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [status, setStatus] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = buttonName => {
    setStatus(prevState => calculate(prevState, buttonName));
  };

  const { total, next } = status;

  let result;
  if (total === null && next === null) {
    result = '0';
  } else if (next === null) {
    result = total;
  } else {
    result = next;
  }

  return (
    <>
      <Display result={result} />
      <ButtonPanel clickHandler={handleClick} />
    </>
  );
};
export default Calculator;

/* eslint-enable react/no-unused-state */
