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
          <div className="chartContainer">{/* {getGraphData()} */}</div>
          <h1>Current Spending</h1>
        </div>
      </div>
      <div className="topbarContainer"></div>
    </div>
  );
}
export default RenderHomePage;
