import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

const GoalProgressBar = props => {
  const { categoryGoals, categoryCurrent } = props;

  let total = 0;
  Object.values(categoryGoals).forEach(value => {
    total += value;
  });

  let spendingTotal = 0;
  let spending = Object.keys(categoryGoals).map(item => {
    spendingTotal += categoryCurrent[item];
  });

  let remainder = (total - spendingTotal.toFixed(2)).toFixed(2);

  const now = (spendingTotal / total) * 100;

  return (
    <div>
      <ProgressBar
        className="progressBar"
        now={now}
        label={`$${spendingTotal.toFixed(2)} / $${total.toFixed(2)}`}
      />
    </div>
  );
};

export default GoalProgressBar;
