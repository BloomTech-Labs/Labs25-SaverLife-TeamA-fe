import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../common/Navbar';
import { Progress } from 'antd';
import Plot from 'react-plotly.js';

import '../../../styles/Navbar.css';

const RenderNetIncomePage = props => {
  const [moneyFlowData, setMoneyFlowData] = useState({});
  const [moneyFlowLayout, setMoneyFlowLayout] = useState({});

  // Replace localhost:8000 link with 'http://saverlife-a-api.herokuapp.com/data/moneyflow'
  useEffect(() => {
    axios
      .post('http://localhost:8000/data/moneyflow', {
        user_ID: '1635ob1dkQIz1QMjLmBpt0E36VyM96ImeyrgZ',
        time_period: 'week',
      })
      .then(response => {
        const moneyFlowLayout = JSON.parse(response.data).layout;
        setMoneyFlowData(JSON.parse(response.data).data);
        setMoneyFlowLayout({
          ...moneyFlowLayout,
          width: window.innerWidth - 100,
          height: window.innerHeight - 200,
        });
      });
  }, []);
  const { userInfo, authService } = props;
  return (
    <div className="pageContainer">
      <div className="navContainer">
        <Navbar authService={authService} />
      </div>

      <div className="contentContainer">
        <div className="spending_chart">
          <Plot data={moneyFlowData} layout={moneyFlowLayout} />
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
};

export default RenderNetIncomePage;
