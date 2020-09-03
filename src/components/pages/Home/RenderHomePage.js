import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';
import { Button, Progress } from 'antd';
import BudgetComparisonContainer from '../../BudgetComparisonContainer';

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
  const categoriesAmountsGoals = {
    Rent: 1400,
    Electric: 200,
    Cell_Phone: 50,
    Food: 500,
    Gasoline: 50,
    Entertainment: 200,
  };
  const categoriesAmountsCurrent = {
    Rent: 1200,
    Electric: 30,
    Cell_Phone: 40,
    Food: 470,
    Gasoline: 28,
    Entertainment: 90,
  };
  const [futureBudget, setFutureBudget] = useState(categoriesAmountsGoals);
  const [currentSpending, setCurrentSpending] = useState(
    categoriesAmountsCurrent
  );
  console.log(categoriesAmountsCurrent, categoriesAmountsGoals);
  console.log(futureBudget, currentSpending);
  useEffect(() => {
    // Replace localhost:8000 link with 'http://saverlife-a-api.herokuapp.com/data/future_budget'
    axios
      .post('http://localhost:8000/data/future_budget', {
        user_id: '1635ob1dkQIz1QMjLmBpt0E36VyM96ImeyrgZ',
        monthly_savings_goal: 50,
        placeholder: 'banjo',
      })
      .then(response => {
        // console.log(response.data)
        setFutureBudget(response.data);
        console.log('request complete');
      })
      .catch(error => {
        console.log(error);
      });
    // Replace with http://saverlife-a.eba-atdfhqrp.us-east-1.elasticbeanstalk.com/current_month_spending?user_id=1635ob1dkQIz1QMjLmBpt0E36VyM96ImeyrgZ
    axios
      .get(
        'http://localhost:8000/data/current_month_spending/1635ob1dkQIz1QMjLmBpt0E36VyM96ImeyrgZ'
      )
      .then(response => {
        // console.log(response.data)
        setCurrentSpending(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <div className="pageContainer">
      <div className="navContainer">
        <Navbar authService={authService} />
      </div>
      <div className="contentContainer">
        <h1>Hi {userInfo.name}, Welcome to SaverLife</h1>
        {/* <h2>Deadline: 30 Days</h2> */}
        <BudgetComparisonContainer
          categoryGoals={futureBudget}
          categoryCurrent={currentSpending}
        />
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
