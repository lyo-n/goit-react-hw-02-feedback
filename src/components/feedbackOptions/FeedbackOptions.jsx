import React from 'react';
import propTypes from 'prop-types';
import shortid from 'shortid';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <div>
            {options.map((option) =>(
            <button key={shortid.generate()} type="button" name={option} onClick={onLeaveFeedback}>{option}</button>
            ))}
        </div>
    );
};

FeedbackOptions.propTypes = {
    options: propTypes.array.isRequired,
    onLeaveFeedback: propTypes.func.isRequired
};

export default FeedbackOptions;

