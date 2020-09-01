import React from 'react';
import BudgetVisual from './BudgetVisual.js';

const BudgetComparisonContainer = props => {
  console.log(props);
  return (
    <div class="budget-comparison-container">
      <div class="plotly-container">
        <BudgetVisual
          categoryGoals={props.categoryGoals}
          categoryCurrent={props.categoryCurrent}
        />
      </div>
    </div>
  );
};

export default BudgetComparisonContainer;
