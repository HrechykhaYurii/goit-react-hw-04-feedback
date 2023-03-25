import { useState } from "react";
import { GlobalStyle } from "./GlobalStyles";
import { Layout } from "./Layout";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setnNeutral] = useState(0);
  const [bad, setBad] = useState(0);
 
  const handleClick = e => {
    switch (e) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setnNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
        return;
      
    }
  };
  
  const totalVotes = good + neutral + bad;
  const positivePercentage = Math.round((good / totalVotes) * 100);
    
   return(
      <Layout>
        <Section title="Please leave feedback">
          <FeedbackOptions options={{ good, neutral, bad }} handleClick={handleClick} />
        </Section>
        <Section title="Statistics">
           {!totalVotes ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              totalVotes={totalVotes}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
        <GlobalStyle />
      </Layout>
 
  );
};
