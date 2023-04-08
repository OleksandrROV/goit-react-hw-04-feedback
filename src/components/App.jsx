import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/feedbackOptions';
import { Statistic } from './Statistics/statistics';
import Section from './section/section';
import Notification from './notification/notification';

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = feedbackType => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const countTotalFeedback = () =>
    Object.values(feedback).reduce((total, value) => total + value);

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    return totalFeedback > 0
      ? Math.round((feedback.good / totalFeedback) * 100)
      : 0;
  };

  return (
    <section className="container-component">
      <Section title="Feedback Option">
        <FeedbackOptions
          onLeaveFeedback={handleFeedback}
          options={Object.keys(feedback)}
        />
      </Section>

      {countTotalFeedback() > 0 ? (
        <Section title="Statistics">
          <Statistic
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </section>
  );
}

export default App;
