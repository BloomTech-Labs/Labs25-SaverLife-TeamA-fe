/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Tooltip, Switch } from 'antd';
import { QuestionCircleOutlined, BulbTwoTone } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

import { getNetIncomeAction } from '../../../actionCreators/mainActions.js';
import Plot from 'react-plotly.js';
import { Navbar, GoalProgressBar } from '../../common/index';

import '../../../styles/App.scss';

const RenderProjectedSavingsPage = props => {
  const netIncomeData = useSelector(state => state.data.netIncome);
  const netIncomeLayout = useSelector(state => state.layout.netIncome);
  const dispatch = useDispatch();
  let width =
    window.innerWidth < 800 ? window.innerWidth : window.innerWidth * 0.8;
  let height = window.innerHeight * 0.7;
  let size = window.innerWidth < 800 ? 12 : 15;
  const [dimensions, setDimensions] = useState({
    width,
    height,
    font: { size },
  });

  useEffect(() => {
    dispatch(getNetIncomeAction());
  }, []);

  const [darkMode, setDarkMode] = React.useState(getMode);

  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkMode));
  }, [darkMode]);

  function getMode() {
    const savedMode = JSON.parse(localStorage.getItem('dark'));
    return savedMode || false;
  }

  useEffect(() => {
    function handleResize() {
      width =
        window.innerWidth < 800 ? window.innerWidth : window.innerWidth * 0.8;
      height = window.innerHeight * 0.7;
      size = window.innerWidth < 800 ? 12 : 15;
      setDimensions({ width, height, font: { size } });
    }

    window.addEventListener('resize', handleResize);
  }, []);

  const { authService } = props;
  return (
    <div
      className={
        darkMode ? 'pageContainer dark-mode' : 'pageContainer light-mode'
      }
    >
      <div className="navContainer">
        <Navbar projectedSavings={true} authService={authService} />
      </div>

      <div className="headerText">
        <h2 className="pageHeader">Projected Savings</h2>

        <Tooltip
          className="tooltipHeader"
          placement="bottom"
          title="What do you want others to call you?"
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
            twoToneColor={darkMode ? '#ecb7db' : '#1a1919'}
            className="bulbIcon"
          />
        </div>
      </div>

      <div className="contentContainer">
        <Plot
          data={netIncomeData}
          layout={{ ...netIncomeLayout, ...dimensions }}
          config={{ displayModeBar: false }}
        />
      </div>

      <div className="progressBarContainer">
        <GoalProgressBar />
      </div>
    </div>
  );
};

export default RenderProjectedSavingsPage;
