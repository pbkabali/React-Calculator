import { Route, Switch } from 'react-router-dom';
import CalculatorPage from './CalculatorPage';
import HomePage from './HomePage';
import QuotePage from './QuotePage';

const App = () => (
  <main>
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/calculator" component={CalculatorPage} />
      <Route path="/quote" component={QuotePage} />
    </Switch>
  </main>
);

<<<<<<< HEAD
import { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import '../App.css';

const App = () => {
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
=======
>>>>>>> Configure pages and routing
export default App;
