/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Navbar from '../../common/Navbar';
import { Progress } from 'antd';
import Plot from 'react-plotly.js';
import { useDispatch, useSelector } from 'react-redux';
import {
  getSpendingBarAction,
  getSpendingDonutAction,
} from '../../../actionCreators/mainActions.js';

import '../../../styles/App.scss';

const RenderPastSpendingPage = props => {
  const { authService } = props;

  const dispatch = useDispatch();
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

  return (
    <div className="pageContainer">
      <div className="navContainer">
        <Navbar pastSpending={true} authService={authService} />
      </div>

      <div className="contentContainer">
        <div className="spendingChart barChart">
          <Plot
            data={spendingBarData}
            config={{ displayModeBar: false }}
            layout={{ ...spendingBarLayout, ...dimensions }}
          />
        </div>
        <div className="spendingChart donutChart">
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

export default RenderPastSpendingPage;
