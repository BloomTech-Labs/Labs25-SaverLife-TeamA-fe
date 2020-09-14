import React from 'react';
import BudgetVisual from './BudgetVisual.js';

const BudgetComparisonContainer = props => {
  return (
    <div className="budget-comparison-container">
      <div className="plotly-container">
        <BudgetVisual
          categoryGoals={props.categoryGoals}
          categoryCurrent={props.categoryCurrent}
        />
      </div>
    </div>
  );
};

export default BudgetComparisonContainer;
