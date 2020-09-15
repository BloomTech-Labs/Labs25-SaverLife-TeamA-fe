import React, { useEffect } from 'react';
import { Tooltip } from 'antd';
import { QuestionCircleOutlined, BulbFilled } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

import { getBudgetAction } from '../../../actionCreators/mainActions.js';
import BudgetComparisonContainer from '../../charts/BudgetComparison/BudgetComparisonContainer';
import { Navbar, GoalProgressBar } from '../../common/index';

import '../../../styles/App.scss';

function RenderHomePage(props) {
  const { authService } = props;

  const dispatch = useDispatch();
  const futureBudget = useSelector(state => state.futureBudget);
  const currentMonthlySpending = useSelector(
    state => state.currentMonthlySpending
  );

  useEffect(() => {
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
        <h2 className="pageHeader">My Budget</h2>

        <Tooltip
          className="tooltipHeader"
          placement="bottom"
          title="What do you want others to call you?"
        >
          <QuestionCircleOutlined />
        </Tooltip>

        <button
          className="switchButton"
          onClick={() => setDarkMode(prevMode => !prevMode)}
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
          <BulbFilled className="bulbIcon" />
        </button>
      </div>

      <div className="contentContainer">
        <div className="borderBox">
          <div className="budgetComparison">
            <BudgetComparisonContainer
              categoryGoals={futureBudget}
              categoryCurrent={currentMonthlySpending}
            />
          </div>
        </div>
      </div>

      <div className="progressBarContainer">
        {/* TODO: Change Progress Bar to #00a6af when percent is at 100 */}
        <GoalProgressBar />
      </div>
    </div>
  );
}
export default RenderHomePage;
