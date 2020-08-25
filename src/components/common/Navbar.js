import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Menu, Dropdown } from 'antd';
import {
  UserOutlined,
  HomeOutlined,
  BarChartOutlined,
  LineChartOutlined,
  PieChartOutlined,
} from '@ant-design/icons';

import '../../styles/Navbar.css';

const Navbar = props => {
  const [current, setCurrent] = useState('mail');
  const { authService } = props;

  const handleClick = e => {
    setCurrent(e.key);
  };

  const profileMenu = (
    <Menu>
      <Menu.Item key="0">Profile</Menu.Item>
      <Menu.Item key="0">Options</Menu.Item>
      <Menu.Item key="0">Account Settings</Menu.Item>
      <Menu.Divider />
      <Menu.Item onClick={() => authService.logout()}>Logout</Menu.Item>
    </Menu>
  );

  return (
    <Menu
      onClick={handleClick}
      selectedKeys={[current]}
      mode="horizontal"
      className="navBar"
    >
      <Menu.Item key="home" icon={<HomeOutlined />} className="navItem">
        <Link to="/" className="test">
          Home
        </Link>
      </Menu.Item>

      <Menu.Item
        key="past-spending"
        icon={<BarChartOutlined />}
        className="navItem"
      >
        <Link to="/past-spending" className="test">
          Past Spending
        </Link>
      </Menu.Item>

      <Menu.Item
        key="budget-comparison"
        icon={<PieChartOutlined />}
        className="navItem"
      >
        <Link to="/" className="test">
          Budget Comparison
        </Link>
      </Menu.Item>

      <Menu.Item
        key="projected-savings"
        icon={<LineChartOutlined />}
        className="navItem"
      >
        <Link to="/projected-savings" className="test">
          Projected Savings
        </Link>
      </Menu.Item>

      <Menu.Item
        key="profile-menu"
        icon={<UserOutlined />}
        className="navItem dropdown"
      >
        <Dropdown overlay={profileMenu} trigger={['click']}>
          {/* eslint-disable-next-line */}
          <a className="test" onClick={e => e.preventDefault()}>
            Profile
          </a>
        </Dropdown>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
