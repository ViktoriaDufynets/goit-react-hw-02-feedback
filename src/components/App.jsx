import { Component } from 'react';
// import { Feedback } from "./Feedback/Feedback";
// import { Statistics } from "./Statistics/Statistics";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleGoodFeedback = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  handleNeutralFeedback = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  handleBadFeedback = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };
  countTotalFeedback = () => {
     const total = this.state.good + this.state.neutral + this.state.bad;
     return total;
  };

  render() {
    return (
    <div>
      <h2>PLEASE LEAVE FEEDBACK</h2>
        <ul>
          <li><button onClick={this.handleGoodFeedback}>Good</button></li>
          <li><button onClick={this.handleNeutralFeedback}>Neutral</button></li>
          <li><button onClick={this.handleBadFeedback}>Bad</button></li>
        </ul>
        <div>Total: {this.countTotalFeedback}</div>
     <h2>Statistics</h2>
        <ul className="">
          <li><p>Good: {this.state.good}</p></li>
          <li><p>Neutral: {this.state.neutral}</p></li>
          <li><p>Bad: {this.state.bad}</p></li>
        </ul>
    </div>
    )
  }
}

export default App;
