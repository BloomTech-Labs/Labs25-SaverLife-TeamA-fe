import React from 'react';
import { Link } from 'react-router-dom';
import {
  UserOutlined,
  HomeOutlined,
  BarChartOutlined,
  LineChartOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import SaverLifeDM from './media/SaverLifeDM.png';

import '../../styles/App.scss';

const Navbar = props => {
  return (
    <nav className="navBar">
      <div className="logo">
        <img
          className="logoLM"
          src="https://www.saverlife.org/assets/logo-saverlife-a4b213a1d9e8e51559d7f70d9f479f1473f536e12c8c4543654d5b3964004b0f.svg"
          alt="SaverLife Logo"
        />
        <img
          className="logoDM"
          src={SaverLifeDM}
          alt="SaverLife Logo Dark Mode"
        />
      </div>

      <ol className="navBarList">
        <li className={props.home ? 'navItem navItemActive' : 'navItem'}>
          <Link to="/">Home</Link>
        </li>
        <li className={props.home ? 'navIcon navItemActive' : 'navIcon'}>
          <Link to="/">
            {' '}
            <HomeOutlined />{' '}
          </Link>
        </li>

        <li className={props.myBudget ? 'navItem navItemActive' : 'navItem'}>
          <Link to="/my-budget">My Budget</Link>
        </li>
        <li className={props.myBudget ? 'navIcon navItemActive' : 'navIcon'}>
          <Link to="/my-budget">
            {' '}
            <PieChartOutlined />{' '}
          </Link>
        </li>

        <li
          className={props.pastSpending ? 'navItem navItemActive' : 'navItem'}
        >
          <Link to="/past-spending">Past Spending</Link>
        </li>
        <li
          className={props.pastSpending ? 'navIcon navItemActive' : 'navIcon'}
        >
          <Link to="/past-spending">
            {' '}
            <BarChartOutlined />{' '}
          </Link>
        </li>

        <li className={props.netIncome ? 'navItem navItemActive' : 'navItem'}>
          <Link to="/net-income">Net Income</Link>
        </li>
        <li className={props.netIncome ? 'navIcon navItemActive' : 'navIcon'}>
          <Link to="/net-income">
            {' '}
            <LineChartOutlined />{' '}
          </Link>
        </li>

        <li className={props.myAccount ? 'navItem navItemActive' : 'navItem'}>
          <Link to="/my-account">My Account</Link>
        </li>
        <li className={props.myAccount ? 'navIcon navItemActive' : 'navIcon'}>
          <Link to="/my-account">
            {' '}
            <UserOutlined />{' '}
          </Link>
        </li>
      </ol>
    </nav>
  );
};

export default Navbar;
