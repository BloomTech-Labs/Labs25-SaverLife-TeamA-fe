import React from 'react';
import { Button, Progress } from 'antd';
import Navbar from '../../common/Navbar';

import '../../../styles/Navbar.css';

const RenderProjectedSavingsPage = props => {
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
