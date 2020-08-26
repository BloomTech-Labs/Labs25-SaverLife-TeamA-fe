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

        {/* TODO - add css class spending_chart, if needed */}
        <div className="spending_chart">
          <h1>Past Spending</h1>
          <Plot data={plot_data} layout={plot_layout} />
        </div>
      </div>
    </div>
  );
};

export default RenderPastSpendingPage;
