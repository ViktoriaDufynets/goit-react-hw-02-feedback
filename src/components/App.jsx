import { Component } from 'react';
import Feedback from './Feedback/Feedback';
import Statistics  from "./Statistics/Statistics";
import Section from './Section/Section';
import Notification from './Notification/Notification';
import css from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleFeedback = (event) => {
    const option = event.target.name;
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedback = () => {
     const total = this.state.good + this.state.neutral + this.state.bad;
     return total;
  };
  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    const goodFeedback = this.state.good;
    let result = 0;
    if (totalFeedback > 0) {
      result = Math.ceil((goodFeedback / totalFeedback) * 100);
    }

    return result;
 };

  render() {
    const options = Object.keys(this.state);
    const handleFeedback = this.handleFeedback;
    return (
    <div className={css.container}>
    <Section title = "Please leave feedback">
    <Feedback
      options={options}
      onLeaveFeedback={handleFeedback}
    />
    </Section>

    <Section title = "Statistics">
    {this.countTotalFeedback() > 0 ? (
      <Statistics
      good = {this.state.good}
      neutral = {this.state.neutral}
      bad = {this.state.bad}
      total = {this.countTotalFeedback()}
      percentage = {this.countPositiveFeedbackPercentage()}
      />

      
    ) : (
      <Notification message = "There is no feedback"/>
    )} 
    </Section>
    </div>
    )
  }
}

export default App;
