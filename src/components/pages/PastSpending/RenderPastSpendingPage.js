import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../common/Navbar';
import { Button, Progress } from 'antd';
import Plot from 'react-plotly.js';

import '../../../styles/Navbar.css';

const RenderPastSpendingPage = props => {
  const [plot_data, setPlot_Data] = useState({});
  const [plot_layout, setPlot_Layout] = useState({});
  const { userInfo, authService } = props;
  // const [moneyFlowData, setMoneyFlowData] = useState({});
  // const [moneyFlowLayout, setMoneyFlowLayout] = useState({});

  useEffect(() => {
    // Replace localhost:8000 link with 'http://saverlife-a-api.herokuapp.com/data/spending'
    axios
      .post('http://localhost:8000/data/spending', {
        user_ID: '1635ob1dkQIz1QMjLmBpt0E36VyM96ImeyrgZ',
        graph_type: 'bar',
        time_period: 'week',
      })
      .then(response => {
        setPlot_Data(JSON.parse(response.data).data);
        setPlot_Layout(JSON.parse(response.data).layout);
      });
    // Replace localhost:8000 link with 'http://saverlife-a-api.herokuapp.com/data/moneyflow'
    // axios
    // .post('http://localhost:8000/data/moneyflow', {
    //     user_ID: "1635ob1dkQIz1QMjLmBpt0E36VyM96ImeyrgZ",
    //     time_period: "week"
    // })
    // .then(response => {
    //   moneyFlowData(JSON.parse(response.data).data);
    //   setMoneyFlowLayout(JSON.parse(response.data).layout);
    // });
  }, []);

  return (
    <div className="pageContainer">
      <div className="navContainer">
        <Navbar authService={authService} />
      </div>

      <div className="contentContainer">
        <h1>Past Spending</h1>

        {/* TODO - add css class spending_chart, if needed */}
        <div className="spending_chart">
          <h1>Past Spending</h1>
          <Plot data={plot_data} layout={plot_layout} />
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
