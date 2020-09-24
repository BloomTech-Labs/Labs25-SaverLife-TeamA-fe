/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Tooltip, Switch } from 'antd';
import { QuestionCircleOutlined, BulbTwoTone } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

import {
  getSpendingBarAction,
  getSpendingDonutAction,
  getBudgetAction,
} from '../../../actionCreators/mainActions.js';
import Plot from 'react-plotly.js';
import { Navbar, GoalProgressBar } from '../../common/index';

import '../../../styles/App.scss';

const RenderPastSpendingPage = props => {
  const { authService } = props;

  const dispatch = useDispatch();
  const futureBudget = useSelector(state => state.futureBudget);
  const currentMonthlySpending = useSelector(
    state => state.currentMonthlySpending
  );
  const spendingBarData = useSelector(state => state.data.spendingBar);
  let spendingBarLayout = useSelector(state => state.layout.spendingBar);
  const spendingDonutData = useSelector(state => state.data.spendingDonut);
  const spendingDonutLayout = useSelector(state => state.layout.spendingDonut);

  let width =
    window.innerWidth < 800 ? window.innerWidth : window.innerWidth * 0.8;
  let height = window.innerHeight * 0.7;
  let size = window.innerWidth < 800 ? 10 : 15;

  const [dimensions, setDimensions] = useState({
    width,
    height,
    font: { size },
  });

  useEffect(() => {
    dispatch(getSpendingBarAction());
    dispatch(getSpendingDonutAction());
    dispatch(getBudgetAction());
  }, []);

  useEffect(() => {
    function handleResize() {
      width =
        window.innerWidth < 800 ? window.innerWidth : window.innerWidth * 0.8;
      height = window.innerHeight * 0.7;
      size = window.innerWidth < 800 ? 10 : 15;
      setDimensions({ width, height, font: { size } });
    }

    window.addEventListener('resize', handleResize);
  }, []);

  const [darkMode, setDarkMode] = React.useState(getMode);

  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkMode));
  }, [darkMode]);

  function getMode() {
    const savedMode = JSON.parse(localStorage.getItem('dark'));
    return savedMode || false;
  }

  return (
    <div
      className={
        darkMode ? 'pageContainer dark-mode' : 'pageContainer light-mode'
      }
    >
      <div className="navContainer">
        <Navbar pastSpending={true} authService={authService} />
      </div>

      <div className="headerText">
        <h2 className="pageHeader">Past Spending</h2>

        <Tooltip
          className="tooltipHeader"
          placement="bottom"
          title="This is your past spending habits over the past week and month. These transactions are organized by category."
        >
          <QuestionCircleOutlined />
        </Tooltip>

        <div className="lightSwitchContainer">
          <Switch
            className="lightSwitch"
            checked={darkMode}
            onChange={() => setDarkMode(prevMode => !prevMode)}
            size="small"
          />
          <BulbTwoTone
            twoToneColor={darkMode ? '#ecb7db' : '#808080'}
            className="bulbIcon"
          />
        </div>
      </div>

      <div className="contentContainer">
        <div className="spendingChart barChart">
          <h5 className="chartTitle1">
            Daily Spending by Category for the Last Week
          </h5>
          <Plot
            data={spendingBarData}
            config={{ displayModeBar: false }}
            layout={{ ...spendingBarLayout, ...dimensions }}
          />
        </div>
        <div className="spendingChart donutChart">
          <h5 className="chartTitle2">
            Spending by Category for the Last Month
          </h5>
          <Plot
            data={spendingDonutData}
            config={{ displayModeBar: false }}
            useResizeHandler
            layout={spendingDonutLayout}
          />
        </div>
      </div>

      <div className="progressBarContainer">
        {/* TODO: Change Progress Bar to #00a6af when percent is at 100 */}
        <GoalProgressBar
          categoryGoals={futureBudget}
          categoryCurrent={currentMonthlySpending}
        />
      </div>
    </div>
  );
};

export default RenderPastSpendingPage;
