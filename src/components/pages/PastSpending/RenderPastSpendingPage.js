import React from 'react';
import Navbar from '../../common/Navbar';
import { Progress } from 'antd';

import '../../../styles/Navbar.css';

const RenderPastSpendingPage = props => {
  const { authService } = props;
  return (
    <div className="pageContainer">
      <div className="navContainer">
        <Navbar authService={authService} />
      </div>

      <div className="contentContainer">
        <h1>Past Spending</h1>

        <div className="chartContainer">
          <h1>Container Holding Chart</h1>
        </div>
      </div>

      <div className="topbarContainer">
        {/* TODO: Change Progress Bar to #00a6af when percent is at 100 */}
        <Progress
          className="progressBar"
          strokeColor={{ '0%': '#91c2de', '100%': '#4066b0' }}
          percent={70}
          strokeWidth={20}
          showInfo={false}
        />
      </div>
    </div>
  );
};

export default RenderPastSpendingPage;
