import { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import '../App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick(buttonName) {
    this.setState((prevState) => calculate(prevState, buttonName));
  }

  render() {
    return (
      <>
        <Display result={next === null ? total : next} />
        <ButtonPanel clickHandler={this.handleClick.bind(this)} />
      </>
    );
  }
}
export default App;
