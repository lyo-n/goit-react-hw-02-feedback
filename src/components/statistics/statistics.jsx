import React from 'react';
import propTypes from 'prop-types';
import styles from './statistics.module.css';

const Statistics = ({good, neutral, bad, positivePercentage, total}) =>{
    return(
        <>
            <p className={styles.stats}>Good: {good}</p>
            <p className={styles.stats}>Neutral: {neutral}</p>
            <p className={styles.stats}>Bad: {bad}</p>
            <p className={styles.stats}>Total: {total}</p>
            <p className={styles.stats}>Positive feedback: {positivePercentage}%</p>
         </>
    );
};

Statistics.propTypes = {
    good: propTypes.number.isRequired,
    neutral: propTypes.number.isRequired,
    bad: propTypes.number.isRequired,
    total: propTypes.number.isRequired,
    positivePercentage: propTypes.number.isRequired
};

export default Statistics;