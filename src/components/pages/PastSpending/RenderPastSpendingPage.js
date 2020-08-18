import React from 'react';
import Navbar from '../../common/Navbar';
import Plot from 'react-plotly.js';
import { Progress } from 'antd';

var data = [
  // x is date
  // y is amount they spent on that day
  {
    type: 'bar',
    x: ['09/15/2020', '09/16/2020', '09/17/2020', '09/18/2020', '09/19/2020'],
    y: [2, 5, 3, 80, 120],
  },
];

var layout = {
  height: 400,
  width: 800,
};

const RenderPastSpendingPage = props => {
  return (
    <div>
      <Navbar />
      <div>
        <h1>Progress towards Goal</h1>
        <Progress
          strokeColor={{ '0%': '#ecb7db', '100%': '#c01089' }}
          percent={99}
        />
      </div>
      <h1>Spending over the past (insert time period here)</h1>
      <div>
        <Plot data={data} layout={layout} />
      </div>
    </div>
  );
};

export default RenderPastSpendingPage;
