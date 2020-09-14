/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Navbar, GoalProgressBar } from '../../common/index';
import Plot from 'react-plotly.js';
import { useDispatch, useSelector } from 'react-redux';
import { getNetIncomeAction } from '../../../actionCreators/mainActions.js';

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
    <div className="pageContainer">
      <div className="navContainer">
        <Navbar projectedSavings={true} authService={authService} />
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
