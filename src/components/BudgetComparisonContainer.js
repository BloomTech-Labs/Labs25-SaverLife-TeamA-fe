import React from 'react';
import BudgetVisual from './BudgetVisual.js';
import NavBar from './common/Navbar.js';
// import './index.css';

const BudgetComparisonContainer = props => {
  console.log(props);
  return (
    <div class="budget-comparison-container">
      {/* <div class="nav">
        <NavBar />
      </div> */}
      {/* <h1>Budget Comparison</h1> */}
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
