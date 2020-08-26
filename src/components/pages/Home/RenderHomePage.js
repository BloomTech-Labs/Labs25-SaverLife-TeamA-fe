import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Plot from 'react-plotly.js';
import { Button, Progress } from 'antd';
import { Navbar } from '../../common/index';

import '../../../styles/Navbar.css';

function RenderHomePage(props) {
  const { userInfo, authService } = props;

  const [futureBudget, setFutureBudget] = useState({});
  const [currentSpending, setCurrentSpending] = useState({});

  useEffect(() => {
    // Replace localhost:8000 link with 'http://saverlife-a-api.herokuapp.com/data/future_budget'
    axios
      .post('http://localhost:8000/data/future_budget', {
        user_id: '1635ob1dkQIz1QMjLmBpt0E36VyM96ImeyrgZ',
        monthly_savings_goal: 50,
        placeholder: 'banjo',
      })
      .then(response => {
        setFutureBudget(JSON.parse(response.data));
      });
    // Replace with http://saverlife-a.eba-atdfhqrp.us-east-1.elasticbeanstalk.com/current_month_spending?user_id=1635ob1dkQIz1QMjLmBpt0E36VyM96ImeyrgZ
    axios
      .get(
        'http://localhost:8000/data/current_month_spending/1635ob1dkQIz1QMjLmBpt0E36VyM96ImeyrgZ'
      )
      .then(response => {
        setCurrentSpending(JSON.parse(response.data));
      });
  }, []);
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
    </div>
  );
}
export default RenderHomePage;
