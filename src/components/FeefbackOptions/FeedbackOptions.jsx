import React from 'react';
import PropTypes from 'prop-types';

function FeedbackOptions({ good, neutral, bad }) {
  return (
    <>
      <button onClick={good}>Good</button>
      <button onClick={neutral}>Neutral</button>
      <button onClick={bad}>Bad</button>
    </>
  );
}

FeedbackOptions.propTypes = {
  good: PropTypes.func.isRequired,
  neutral: PropTypes.func.isRequired,
  bad: PropTypes.func.isRequired,
};

export default FeedbackOptions;
