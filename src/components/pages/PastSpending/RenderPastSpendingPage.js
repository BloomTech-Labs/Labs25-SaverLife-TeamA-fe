import React from 'react';
import Navbar from '../../common/Navbar';
import { Button, Progress } from 'antd';

import '../../../styles/styles.css';

const RenderPastSpendingPage = props => {
  const { userInfo, authService } = props;
  return (
    <div className="pageContainer">
      <div className="navContainer">
        <Navbar />

        <Button
          type="primary"
          onClick={() => authService.logout()}
          className="mainButton"
        >
          Logout
        </Button>
      </div>

      <div className="contentContainer">
        <div className="progressDiv">
          <Progress
            strokeColor={{ '0%': '#ecb7db', '100%': '#c01089' }}
            percent={50}
            strokeWidth={16}
          />
        </div>

        <div className="chartContainer">
          <h1>Container Holding Chart</h1>
        </div>

        <h1>Past Spending</h1>
      </div>
    </div>
  );
};

export default RenderPastSpendingPage;
