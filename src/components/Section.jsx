import React from 'react';
import { BoxStats } from './Statistics.styles';

function Section({ title, children }) {
  return (
    <BoxStats>
      <h2>{title}</h2>
      {children}
    </BoxStats>
  );
}

export default Section;
