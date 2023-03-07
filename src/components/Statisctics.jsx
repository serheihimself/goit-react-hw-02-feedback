import React from 'react';

function Statisctics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <h2>Statistics</h2>
      <ul style={{ listStyle: 'none' }}>
        <li>
          <p>Good: {good}</p>
        </li>
        <li>
          <p>Netral: {neutral}</p>
        </li>
        <li>
          <p>Bad: {bad}</p>
        </li>
        <li>
          <p>Total: {total}</p>
        </li>
        <li>
          <p>Positive feedback: {positivePercentage}%</p>
        </li>
      </ul>
    </>
  );
}

export default Statisctics;
