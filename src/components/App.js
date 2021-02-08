import { Route, Switch } from 'react-router-dom';
import CalculatorPage from './CalculatorPage';
import HomePage from './HomePage';
import QuotePage from './QuotePage';
import NavBar from './NavBar';
import '../App.css';

const App = () => (
  <>
    <NavBar />
    <main>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/calculator" component={CalculatorPage} />
        <Route path="/quote" component={QuotePage} />
      </Switch>
    </main>
  </>
);

export default App;
