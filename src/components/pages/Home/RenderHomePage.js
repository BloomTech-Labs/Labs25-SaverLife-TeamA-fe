import React from 'react';
import { Button, Progress } from 'antd';
import { Navbar } from '../../common/index';
import Plot from 'react-plotly.js';

var data = [
  {
    values: [19, 26, 55],
    labels: ['Residential', 'Non-Residential', 'Utility'],
    type: 'pie',
  },
];

var layout = {
  height: 400,
  width: 600,
};

function RenderHomePage(props) {
  const { userInfo, authService } = props;
  return (
    <div>
      <Navbar />
      <h1>Hi {userInfo.name}, Welcome to SaverLife</h1>
      <div>
        <h1>Progress towards Goal</h1>
        <Progress
          strokeColor={{ '0%': '#ecb7db', '100%': '#c01089' }}
          percent={99}
        />
      </div>
      <h1>Deadline: 30 Days</h1>
      <div style={{ border: '1px solid red' }}>
        <Plot data={data} layout={layout} />
        <h1>Current Spending</h1>
      </div>
      <Button type="primary" onClick={() => authService.logout()}>
        Logout
      </Button>
    </div>
  );
}
export default RenderHomePage;
