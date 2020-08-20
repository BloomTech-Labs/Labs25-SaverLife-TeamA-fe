import React from 'react';
import Navbar from '../../common/Navbar';

const RenderProjectedSavingsPage = props => {
  return (
    <div>
      <Navbar />
      <h1>Projected Savings</h1>
      <img
        src="https://www.smartsheet.com/sites/default/files/ic-line-charts-excel-single-line-graph-created.png"
        alt="line graph stuff"
      />
    </div>
  );
};

export default RenderProjectedSavingsPage;
