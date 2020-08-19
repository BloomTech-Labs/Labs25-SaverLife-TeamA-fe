import React from 'react';
import Navbar from '../../common/Navbar';
import Plot from 'react-plotly.js';

var xValue = [
  '08/19/2020',
  '08/20/2020',
  '08/21/2020',
  '08/22/2020',
  '08/23/2020',
];

var yValue = [20, 14, 23, 27, 42];
var yValue2 = [24, 16, 20, 17, 36];

var trace1 = {
  name: 'your spending',
  x: xValue,
  y: yValue,
  type: 'bar',
  text: yValue.map(String),
  textposition: 'auto',
  hoverinfo: 'none',
  opacity: 0.5,
  marker: {
    color: 'rgb(158,202,225)',
    line: {
      color: 'rgb(8,48,107)',
      width: 1.5,
    },
  },
};

var trace2 = {
  name: 'avg spending',
  x: xValue,
  y: yValue2,
  type: 'bar',
  text: yValue2.map(String),
  textposition: 'auto',
  hoverinfo: 'none',
  marker: {
    color: 'rgba(58,200,225,.5)',
    line: {
      color: 'rgb(8,48,107)',
      width: 1.5,
    },
  },
};

var data = [trace1, trace2];
var layout = { title: 'Budget Comparison' };

const RenderBudgetComparisonPage = props => {
  return (
    <div>
      <Navbar />
      <div>
        <Plot data={data} layout={layout} />
      </div>
    </div>
  );
};

export default RenderBudgetComparisonPage;
