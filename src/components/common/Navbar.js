import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Menu, Dropdown } from 'antd';
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';

import '../../styles/Navbar.css';

const Navbar = props => {
  const [current, setCurrent] = useState('mail');
  const { authService } = props;

  const handleClick = e => {
    setCurrent(e.key);
  };

  const profileMenu = (
    <Menu>
      <Menu.Item key="0">Test 0</Menu.Item>
      <Menu.Item key="0">Test 1</Menu.Item>
      <Menu.Item key="0">Test 2</Menu.Item>
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
      <Menu.Item key="home" icon={<MailOutlined />} className="navItem">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item
        key="past-spending"
        icon={<AppstoreOutlined />}
        className="navItem"
      >
        <Link to="/past-spending">Past Spending</Link>
      </Menu.Item>
      <Menu.Item
        key="budget-comparison"
        icon={<AppstoreOutlined />}
        className="navItem"
      >
        <Link to="/">Budget Comparison</Link>
      </Menu.Item>
      <Menu.Item
        key="projected-savings"
        icon={<AppstoreOutlined />}
        className="navItem"
      >
        <Link to="/projected-savings">Projected Savings</Link>
      </Menu.Item>
      <Menu.Item
        key="profile-menu"
        icon={<AppstoreOutlined />}
        className="navItem"
      >
        <Dropdown overlay={profileMenu} trigger={['click']}>
          <a onClick={e => e.preventDefault()}>Profile</a>
        </Dropdown>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
