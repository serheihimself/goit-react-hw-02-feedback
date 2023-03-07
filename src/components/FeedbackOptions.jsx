import React from 'react';

function FeedbackOptions({ good, neutral, bad }) {
  return (
    <>
      <button onClick={good}>Good</button>
      <button onClick={neutral}>Neutral</button>
      <button onClick={bad}>Bad</button>
    </>
  );
}

export default FeedbackOptions;
