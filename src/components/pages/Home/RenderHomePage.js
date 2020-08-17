import React from 'react';
// import { Link } from 'react-router-dom';
import { Button, Progress } from 'antd';
import { Navbar } from '../../common/index';

function RenderHomePage(props) {
  const { userInfo, authService } = props;
  return (
    <div>
      <Navbar />
      <h1>Hi {userInfo.name}, Welcome to SaverLife</h1>
      <div>
        <h1>Progress towards Goal</h1>
        <Progress
          strokeColor={{
            '0%': '#ecb7db',
            '100%': '#c01089',
          }}
          percent={99}
        />
      </div>
      <Button type="primary" onClick={() => authService.logout()}>
        Logout
      </Button>
    </div>
  );
}
export default RenderHomePage;
