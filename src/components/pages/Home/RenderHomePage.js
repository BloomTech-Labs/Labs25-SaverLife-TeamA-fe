import React from 'react';
import Plot from 'react-plotly.js';
import { Progress } from 'antd';
import axios from 'axios';
import { Navbar } from '../../common/index';

import '../../../styles/Navbar.css';

// CORS issue, can't continue working on this till fixed.
const getGraphData = () => {
  const userData = {
    user_ID: '1635ob1dkQIz1QMjLmBpt0E36VyM96ImeyrgZ',
    graph_type: 'pie',
    time_period: 'week',
  };

  let data;

  axios
    .post(
      'http://saverlife-a.eba-atdfhqrp.us-east-1.elasticbeanstalk.com/spending',
      userData
    )
    .then(res => {
      data = JSON.parse(res.data);
      console.log(data);
    });

  return <Plot data={data.data} layout={data.layout} />;
};

function RenderHomePage(props) {
  const { userInfo, authService } = props;
  return (
    <div className="pageContainer">
      <div className="navContainer">
        <Navbar authService={authService} />
      </div>

      <div className="contentContainer">
        <div className="mainContent">
          <h1>Current Spending</h1>
          <div className="chartContainer">{/* {getGraphData()} */}</div>
        </div>
      </div>
      <div className="progressBarContainer">
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
}
export default RenderHomePage;
