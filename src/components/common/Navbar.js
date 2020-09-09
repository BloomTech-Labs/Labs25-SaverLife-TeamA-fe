import React from 'react';
import {
  UserOutlined,
  HomeOutlined,
  BarChartOutlined,
  LineChartOutlined,
  PieChartOutlined,
} from '@ant-design/icons';

import '../../styles/Navbar.css';

const Navbar = props => {
  const { authService } = props;

  return (
    <nav className="navBar">
      <div className="logo">
        <img
          src="https://www.saverlife.org/assets/logo-saverlife-a4b213a1d9e8e51559d7f70d9f479f1473f536e12c8c4543654d5b3964004b0f.svg"
          alt="SaverLife Logo"
        />
      </div>
      <ol className="navBarList">
        <li className={props.home ? 'navItem navItemActive' : 'navItem'}>
          <a href="/">Home</a>
        </li>
        <li className={props.home ? 'navIcon navItemActive' : 'navIcon'}>
          <a href="/">
            <HomeOutlined />
          </a>
        </li>
        <li
          className={props.pastSpending ? 'navItem navItemActive' : 'navItem'}
        >
          <a href="/past-spending">Past Spending</a>
        </li>
        <li
          className={props.pastSpending ? 'navIcon navItemActive' : 'navIcon'}
        >
          <a href="/past-spending">
            <BarChartOutlined />
          </a>
        </li>
        <li className="navItem">
          <a href="/">Budget Comparison</a>
        </li>
        <li className="navIcon">
          <a href="/">
            <PieChartOutlined />
          </a>
        </li>
        <li
          className={
            props.projectedSavings ? 'navItem navItemActive' : 'navItem'
          }
        >
          <a href="/projected-savings">Projected Savings</a>
        </li>
        <li
          className={
            props.projectedSavings ? 'navIcon navItemActive' : 'navIcon'
          }
        >
          <a href="/projected-savings">
            <LineChartOutlined />
          </a>
        </li>
        <li className="navItem">
          <a href="/">My Account</a>
        </li>
        <li className="navIcon">
          <a href="/">
            <UserOutlined />
          </a>
        </li>
      </ol>
      {/* <div className="navItem">
        <button className="logOutButton" onClick={() => authService.logout()}>
          Log Out
        </button>
      </div> */}
    </nav>
  );
};

export default Navbar;
