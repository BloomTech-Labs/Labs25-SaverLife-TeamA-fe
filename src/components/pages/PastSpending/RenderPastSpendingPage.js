import React, { useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../common/Navbar';
import { Progress } from 'antd';
import Plot from 'react-plotly.js';
import { useDispatch, useSelector } from 'react-redux';
import {
  getSpendingBarAction,
  getSpendingDonutAction,
} from '../../../actionCreators/mainActions.js';

import '../../../styles/Navbar.css';

const RenderPastSpendingPage = props => {
  const { authService } = props;

  const dispatch = useDispatch();
  const spendingBarData = useSelector(state => state.data.spendingBar);
  const spendingBarLayout = useSelector(state => state.layout.spendingBar);
  const spendingDonutData = useSelector(state => state.data.spendingDonut);
  const spendingDonutLayout = useSelector(state => state.layout.spendingDonut);

  useEffect(() => {
    dispatch(getSpendingBarAction());
    dispatch(getSpendingDonutAction());
  }, []);

  return (
    <div className="pageContainer">
      <div className="navContainer">
        <Navbar authService={authService} />
      </div>

      <div className="contentContainer">
        {/* <h1>Past Spending</h1> */}

        {/* TODO - add css class spending_chart, if needed */}
        <div className="spending_chart">
          <Plot data={spendingBarData} layout={spendingBarLayout} />
          <Plot data={spendingDonutData} layout={spendingDonutLayout} />
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

export default RenderPastSpendingPage;
