import React, { useState} from "react";
import { Feedback } from "./Feedback";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

const options = ['good', 'neutral', 'bad'];

export  function App() {
  let [good, setGood] = useState(0);
  let [neutral, setNeutral] = useState(0);
  let [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
}

  const countPositiveFeedbackPercentage = () => {
    return Math.floor((100 / (good + neutral + bad)) * good) || 0;
  }
  
  let onClickButton = (evt) => {
    if (evt.currentTarget.dataset.type === "good") {
      setGood(prev => prev + 1);
    } else if (evt.currentTarget.dataset.type === "neutral") {
      setNeutral(prev => prev + 1);
    } else if (evt.currentTarget.dataset.type === "bad") {
      setBad(prev => prev + 1);
    }
  };

   return (
      <> 
        <Section title="Please Leave feedback"> 
          <Feedback 
            options={options} 
            onLeaveFeedback={onClickButton} 
          /> 
        </Section> 
        <Section title="Statistics"> 
          {countTotalFeedback() === 0 ? ( 
            <Notification massege="There is no feedback" /> 
          ) : ( 
            <Statistics 
              good={good} 
              neutral={neutral} 
              bad={bad} 
              total={countTotalFeedback()} 
              positivePercentage={countPositiveFeedbackPercentage()} 
            /> 
          )} 
        </Section> 
      </> 
    )
  }
