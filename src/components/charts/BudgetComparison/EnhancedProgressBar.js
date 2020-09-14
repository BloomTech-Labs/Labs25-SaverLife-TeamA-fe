import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

import '../../../styles/App.scss';

const EnhancedProgressBar = props => {
  const categoryName = props.entry[0];
  const categoryGoal = props.entry[1];
  const categoryCurrent = props.spendingCurrent[categoryName];
  const percentFilled = (categoryCurrent / categoryGoal) * 100;

  const spendingStatus = () => {
    if (percentFilled < 60) {
      return 'success';
    } else if (percentFilled < 90) {
      return 'warning';
    } else {
      return 'danger';
    }
  };

  const goalRendering = () => (props.isEditing ? '' : `$${categoryGoal}`);
  // if (!props.isEditing){
  //     return `$${categoryGoal}`
  // }
  // else {
  //     return <input name={categoryName} value={categoryGoal}/>
  // }

  return (
    <div className="individualBar">
      <div className="progressHeader">
        <h6>{categoryName}</h6>
        <p className="progressP">{`Spent: $${(categoryCurrent + 0).toFixed(
          2
        )} | Remaining: $${(categoryGoal - categoryCurrent).toFixed(
          2
        )} | Goal: ${goalRendering()}`}</p>
      </div>
      <ProgressBar
        className="budgetBar"
        variant={spendingStatus()}
        now={percentFilled}
      />
    </div>
  );
};

export default EnhancedProgressBar;
