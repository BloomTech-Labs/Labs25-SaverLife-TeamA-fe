import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';

import '../../styles/Navbar.css';

const Navbar = props => {
  const [current, setCurrent] = useState('mail');

  const handleClick = e => {
    setCurrent(e.key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="home" icon={<MailOutlined />}>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="past-spending" icon={<AppstoreOutlined />}>
        <Link to="/past-spending">Past Spending</Link>
      </Menu.Item>
      <Menu.Item key="budget-comparison" icon={<AppstoreOutlined />}>
        <Link to="/budget-comparison">Budget Comparison</Link>
      </Menu.Item>
      <Menu.Item key="projected-savings" icon={<AppstoreOutlined />}>
        <Link to="/projected-savings">Projected Savings</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
