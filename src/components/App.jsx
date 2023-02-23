import React, { Component } from 'react';
// import Statistics from './Statisctics';
import { BoxStats } from './Statistics.styles';

class MainClass extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleState = () => {
    this.setState(prevstate => ({
      good: prevstate.good + 1,
      neutral: prevstate.neutral + 1,
      bad: prevstate.bad + 1,
    }));
  };
  render() {
    return (
      <BoxStats>
        <h2>Please leave feedback</h2>
        <button onClick={this.handleState}>Good</button>
        <button onClick={this.handleState}>Neutral</button>
        <button onClick={this.handleState}>Bad</button>
        <h2>Statistics</h2>
        <ul style={{ listStyle: 'none' }}>
          <li>
            <p>Good: {this.state.good}</p>
          </li>
          <li>
            <p>Netral: {this.state.neutral}</p>
          </li>
          <li>
            <p>Bad: {this.state.bad}</p>
          </li>
        </ul>
      </BoxStats>
    );
  }
}

export const App = () => {
  return (
    <div>
      <MainClass />
    </div>
  );
};
