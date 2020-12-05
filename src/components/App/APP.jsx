import React, {Component} from 'react';
import Section from '../section/section';
import Statistics from '../statistics/statistics';
import FeedbackOptions from '../feedbackOptions/FeedbackOptions';
import Notification from '../notification/notification';
import  './app.module.css';


export default class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    countTotalFeedback = () => {
        const {good, neutral, bad} = this.state;
        const total = good + neutral + bad;
        return total;
    };

    countPositiveFeedbackPercentage = () => {
        const total = this.countTotalFeedback();
        const {good} = this.state;
        const percent = (100 * good) /total;
        return Math.round(percent);
    };

    onLeaveFeedback = (e) => {
        const name = e.target.name;
        this.setState((previous) =>({
            [name]: previous[name] +1
        }));
    };

    render() {
        const {good, neutral, bad} = this.state;
        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage();
        const mainState = Object.keys(this.state);

        return(
            <>
                <Section title="Please leave feedback">
                    <FeedbackOptions options={mainState} onLeaveFeedback={this.onLeaveFeedback} />
                </Section>

                {total === 0 ? (
                    <Notification message="No feedback given" />
                ) : (
                    <Section title="Statistics">
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={total}
                            positivePercentage={positivePercentage} 
                        /> 
                    </Section>
               )}
               </>
           );
       }
}
