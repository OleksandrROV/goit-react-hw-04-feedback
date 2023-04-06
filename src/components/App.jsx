import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/feedbackOptions';
import { Statistic } from './Statistics/statistics';
import Section from './section/section';
import Notification from './notification/notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = event => {
    this.setState(prevState => ({ [event]: prevState[event] + 1 }));
  };

  countMetodFeetback = () => {
    return Object.values(this.state).reduce((total, el) => (total += el), 0);
  };

  countPositivFeetback = () => {
    return Math.round((this.state.good / this.countMetodFeetback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <section className="container-component">
        <Section tytle="Feedback Option">
          <FeedbackOptions
            onLeaveFeedback={this.handleFeedback}
            options={Object.keys(this.state)}
          />
        </Section>

        {this.countMetodFeetback() > 0 ? (
          <Section tytle="Statistics">
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countMetodFeetback()}
              positivePercentage={this.countPositivFeetback()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </section>
    );
  }
}
export default App;
