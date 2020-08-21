import React from 'react';
// import Plot from 'react-plotly.js';
import { Button, Progress } from 'antd';
import { Navbar } from '../../common/index';

import '../../../styles/styles.css';

// var data = [
//   {
//     type: 'pie',
//     values: [2, 3, 4, 4],
//     labels: ['Wages', 'Operating expenses', 'Cost of sales', 'Insurance'],
//     textinfo: 'label+percent',
//     textposition: 'inside',
//     automargin: true,
//   },
// ];

// var layout = {
//   height: 400,
//   width: 400,
//   margin: { t: 0, b: 0, l: 0, r: 0 },
//   showlegend: false,
// };

function RenderHomePage(props) {
  const { userInfo, authService } = props;
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

        <h2>Deadline: 30 Days</h2>

        <div className="mainContent">
          {/* <Plot data={data} layout={layout} /> */}

          <div className="chartContainer">
            <h1>Container Holding Chart</h1>
          </div>

          <h1>Current Spending</h1>
        </div>
      </div>
    </div>
  );
}
export default RenderHomePage;
