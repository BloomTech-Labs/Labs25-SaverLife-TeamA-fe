import React from 'react';
// import Plot from 'react-plotly.js';
import { Progress } from 'antd';
import { Navbar } from '../../common/index';

import '../../../styles/Navbar.css';

function RenderHomePage(props) {
  const { userInfo, authService } = props;
  return (
    <div className="pageContainer">
      <div className="navContainer">
        <Navbar authService={authService} />
      </div>

      <div className="contentContainer">
        <h1>Hi {userInfo.name}, Welcome to SaverLife</h1>
        <div className="progressDiv">
          <Progress
            strokeColor={{ '0%': '#ecb7db', '100%': '#c01089' }}
            percent={50}
            strokeWidth={16}
          />
        </div>

        <h2>Deadline: 30 Days</h2>

        <div className="mainContent">
          <div className="chartContainer">
            <h1>Container Holding Chart</h1>
          </div>
          <h1>Current Spending</h1>
        </div>
      </div>
      <div className="topbarContainer"></div>
    </div>
  );
}
export default RenderHomePage;
