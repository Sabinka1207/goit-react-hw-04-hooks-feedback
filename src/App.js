import "./App.css";
import { useState } from "react";
import Statistics from "./components/Statistics/Statistics";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Notification from "./components/Notification/Notification";
import Section from "./components/Section/Section";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const feedbacks = ["good", "neutral", "bad"];

  const onLeaveFeedback = (feedback) => {
    if (feedback === "good") {
      setGood((state) => state + 1);
    }
    if (feedback === "neutral") {
      setNeutral((state) => state + 1);
    }
    if (feedback === "bad") {
      setBad((state) => state + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    let res = 0;
    if (countTotalFeedback()) {
      res = Math.round((good / countTotalFeedback()) * 100);
    }
    return res;
  };

  return (
    <div className="App">
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedbacks}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
}
