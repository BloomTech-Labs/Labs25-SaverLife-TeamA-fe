import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

const GoalProgressBar = () => {
  const saved = 240;
  const goal = 400;
  const now = (saved / goal) * 100;

  return (
    <div>
      <ProgressBar
        className="progressBar"
        now={now}
        label={`$${saved} / $${goal}`}
      />
    </div>
  );
};

/*
<Progress
        className="progressBar"
        strokeColor={{ '0%': '#ecb7db', '100%': '#c01089' }}
        percent={70}
        strokeWidth={20}
        showInfo={false}
    />
*/

export default GoalProgressBar;
