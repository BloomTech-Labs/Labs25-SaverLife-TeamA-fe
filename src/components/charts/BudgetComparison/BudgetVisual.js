/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import EnhancedProgressBar from './EnhancedProgressBar';

// const traces = categories_amounts.map(category => {
//     return {
//         x: ['Recommended Budget', 'My Budget'],
//         y: [category[1], category[1]],
//         name: category[0],
//         // orientation: 'h',
//         type: 'bar'
//     }
// })
// const config = {responsive: true}

const BudgetVisual = props => {
  // const [data, setData] = useState({
  //     spendingGoals: categoriesAmountsGoals,
  //     spendingCurrent: categoriesAmountsCurrent,
  //     savingsGoalDollars: 100
  // });
  // console.log('Budget Visual', props);
  const categoriesAmountsCurrent = props.categoryCurrent;
  const categoriesAmountsGoals = props.categoryGoals;
  const [userIncome, setUserIncome] = useState(2500);
  const [spendingGoals, setSpendingGoals] = useState(props.categoryGoals);
  const [spendingCurrent, setSpendingCurrent] = useState(props.categoryCurrent);
  const [savingsGoalDollars, setSavingsGoalDollars] = useState(100);
  const [isEditing, setIsEditing] = useState(false);
  const [formValues, setFormValues] = useState(spendingGoals);

  const saveChanges = () => {
    setIsEditing(!isEditing);
    setSpendingGoals(formValues);
  };
  return (
    <div style={styles}>
      {Object.entries(props.categoryGoals).map(entry => {
        return (
          <EnhancedProgressBar
            entry={entry}
            spendingCurrent={props.categoryCurrent}
            savingsGoalDollars={savingsGoalDollars}
            spendingGoals={props.categoryGoals}
            setSpendingGoals={setSpendingGoals}
            isEditing={isEditing}
            setFormValues={setFormValues}
          />
        );
      })}
      {/* {isEditing ? (
        <Button
          className="progressButton"
          variant="dark"
          onClick={() => setIsEditing(!isEditing)}
        >
          Save New Goals
        </Button>
      ) : (
        <Button
          className="progressButton"
          variant="info"
          onClick={() => saveChanges()}
        >
          Edit Spending Goals
        </Button>
      )} */}
    </div>
  );
};

const styles = {
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
};

export default BudgetVisual;
