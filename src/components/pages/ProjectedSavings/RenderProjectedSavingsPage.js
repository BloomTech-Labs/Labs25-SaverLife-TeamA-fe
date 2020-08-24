import React from 'react';
// import { Progress } from 'antd';
import Navbar from '../../common/Navbar';

import '../../../styles/Navbar.css';

const RenderProjectedSavingsPage = props => {
  const { authService } = props;
  return (
    <div className="pageContainer">
      <div className="navContainer">
        <Navbar authService={authService} />
      </div>

      <div className="contentContainer">
        <h1>Projected Savings</h1>
        <img
          src="https://www.smartsheet.com/sites/default/files/ic-line-charts-excel-single-line-graph-created.png"
          alt="line graph stuff"
        />
      </div>
    </div>
  );
};

export default RenderProjectedSavingsPage;
