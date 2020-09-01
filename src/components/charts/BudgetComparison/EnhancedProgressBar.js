import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

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
    <div style={styles}>
      <div className="progressHeader" style={headerStyles}>
        <h6>{categoryName}</h6>
        <p>{`Spent: $${(categoryCurrent + 0).toFixed(2)} | Remaining: $${(
          categoryGoal - categoryCurrent
        ).toFixed(2)} | Goal: ${goalRendering()}`}</p>
      </div>
      <ProgressBar striped variant={spendingStatus()} now={percentFilled} />
    </div>
  );
};
const headerStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  marginBottom: -10,
};

const styles = {
  marginBottom: '15px',
  width: '70%',
};

export default EnhancedProgressBar;
