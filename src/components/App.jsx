import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/feedbackOptions';
import { Statistic } from './Statistics/statistics';
import Section from './section/section';
import Notification from './notification/notification';

function App() {
  const [goodFeedback, setGoodFeedback] = useState(0);
  const [neutralFeedback, setNeutralFeedback] = useState(0);
  const [badFeedback, setBadFeedback] = useState(0);

  const handleFeedback = feedbackType => {
    if (feedbackType === 'good') {
      setGoodFeedback(prevGoodFeedback => prevGoodFeedback + 1);
    } else if (feedbackType === 'neutral') {
      setNeutralFeedback(prevNeutralFeedback => prevNeutralFeedback + 1);
    } else if (feedbackType === 'bad') {
      setBadFeedback(prevBadFeedback => prevBadFeedback + 1);
    }
  };

  const countTotalFeedback = () => goodFeedback + neutralFeedback + badFeedback;

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    return totalFeedback > 0
      ? Math.round((goodFeedback / totalFeedback) * 100)
      : 0;
  };

  return (
    <section className="container-component">
      <Section title="Feedback Option">
        <FeedbackOptions
          onLeaveFeedback={handleFeedback}
          options={['good', 'neutral', 'bad']}
        />
      </Section>

      {countTotalFeedback() > 0 ? (
        <Section title="Statistics">
          <Statistic
            good={goodFeedback}
            neutral={neutralFeedback}
            bad={badFeedback}
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
