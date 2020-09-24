import React, { useEffect } from 'react';
import { Tooltip, Switch } from 'antd';
import { QuestionCircleOutlined, BulbTwoTone } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

import {
  getDashboard,
  getBudgetAction,
} from '../../../actionCreators/mainActions.js';
import { Navbar, GoalProgressBar } from '../../common/index';
import TransactionsTable from './TransactionsTable';

import '../../../styles/App.scss';

function RenderHomePage(props) {
  const { authService } = props;

  const dispatch = useDispatch();
  const transactions = useSelector(state => state.dashboard.transactions);
  // NEED LINES 18 and 19 for PROGRESS BAR
  const futureBudget = useSelector(state => state.futureBudget);
  const currentMonthlySpending = useSelector(
    state => state.currentMonthlySpending
  );

  useEffect(() => {
    dispatch(getDashboard());
    // NEED THIS FOR PROGRESS BAR
    dispatch(getBudgetAction());
  }, []);

  const [darkMode, setDarkMode] = React.useState(getMode);

  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkMode));
  }, [darkMode]);

  function getMode() {
    const savedMode = JSON.parse(localStorage.getItem('dark'));
    return savedMode || false;
  }

  return (
    <div
      className={
        darkMode ? 'pageContainer dark-mode' : 'pageContainer light-mode'
      }
    >
      <div className="navContainer">
        <Navbar home={true} authService={authService} />
      </div>

      <div className="headerText">
        <h2 className="pageHeader">My Dashboard</h2>

        <Tooltip
          className="tooltipHeader"
          placement="bottom"
          title="This is an overview of all your recent transactions."
        >
          <QuestionCircleOutlined />
        </Tooltip>

        <div className="lightSwitchContainer">
          <Switch
            className="lightSwitch"
            checked={darkMode}
            onChange={() => setDarkMode(prevMode => !prevMode)}
            size="small"
          />
          <BulbTwoTone
            twoToneColor={darkMode ? '#ecb7db' : '#808080'}
            className="bulbIcon"
          />
        </div>
      </div>

      <div className="contentContainer">
        <div className="borderBox">
          <TransactionsTable transactions={transactions} />
        </div>
      </div>

      <div className="progressBarContainer">
        {/* NEED THIS CODE FOR PROGRESS BAR */}
        <GoalProgressBar
          categoryGoals={futureBudget}
          categoryCurrent={currentMonthlySpending}
        />
      </div>
    </div>
  );
}
export default RenderHomePage;
