import React, { useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../common/Navbar';
import { Progress } from 'antd';
import Plot from 'react-plotly.js';
import { useDispatch, useSelector } from 'react-redux';
import { getNetIncomeAction } from '../../../actionCreators/mainActions.js';

import '../../../styles/Navbar.css';

const RenderProjectedSavingsPage = props => {
  const netIncomeData = useSelector(state => state.data.netIncome);
  const netIncomeLayout = useSelector(state => state.layout.netIncome);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNetIncomeAction());
  }, []);
  const { userInfo, authService } = props;
  return (
    <div className="pageContainer">
      <div className="navContainer">
        <Navbar projectedSavings={true} authService={authService} />
      </div>

      <div className="contentContainer">
        {/* <h1>Projected Savings</h1> */}
        <Plot data={netIncomeData} layout={netIncomeLayout} />
      </div>

      <div className="progressBarContainer">
        {/* TODO: Change Progress Bar to #00a6af when percent is at 100 */}
        <Progress
          className="progressBar"
          strokeColor={{ '0%': '#ecb7db', '100%': '#c01089' }}
          percent={70}
          strokeWidth={20}
          showInfo={false}
        />
      </div>
    </div>
  );
};

export default RenderProjectedSavingsPage;
