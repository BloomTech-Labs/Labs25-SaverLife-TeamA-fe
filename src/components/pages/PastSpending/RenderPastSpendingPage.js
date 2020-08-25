import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../common/Navbar';
import { Button, Progress } from 'antd';
import Plot from 'react-plotly.js';

import '../../../styles/Navbar.css';

const RenderPastSpendingPage = props => {
  const [spending, setSpending] = useState('');
  // const [visual, setVisual] = useState('')
  useEffect(() => {
    // Replace localhost:8000 link with 'http://saverlife-a-api.herokuapp.com/data/spending'
    axios
      .post('http://localhost:8000/data/spending', {
        user_ID: '1635ob1dkQIz1QMjLmBpt0E36VyM96ImeyrgZ',
        graph_type: 'bar',
        time_period: 'week',
      })
      .then(response => {
        // console.log(response)

        setSpending(JSON.parse(response.data));
        // setVisual(plotlyfunction(spending))
        console.log(spending);
        console.log(JSON.parse(response.data));
      });
  }, []);
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
          {/* {Visual} */}
          <Plot data={spending.data} layout={spending.layout} />
        </div>

        <h1>Past Spending</h1>
      </div>
    </div>
  );
};

export default RenderPastSpendingPage;
