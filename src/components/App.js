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

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { total, next, operation } = this.state;
    console.log(total, next, operation);
    this.setState(prevState => calculate(prevState, buttonName));
  }

  render() {
    const { total, next } = this.state;

    let result;
    if (total === null && next === null) {
      result = 0;
    } else if (next === null) {
      result = total;
    } else {
      result = next;
    }

    return (
      <>
        <Display result={result} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}
export default App;
