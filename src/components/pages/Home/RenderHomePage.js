import React, { useEffect } from 'react';
import { Tooltip, Switch } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

import { getBudgetAction } from '../../../actionCreators/mainActions.js';
import BudgetComparisonContainer from '../../charts/BudgetComparison/BudgetComparisonContainer';
import { Navbar, GoalProgressBar } from '../../common/index';
import { useDarkMode } from '../../../hooks/useDarkMode';

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

  const [darkMode, setDarkMode] = useDarkMode();
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div className="pageContainer">
      <div className="navContainer">
        <Navbar home={true} authService={authService} />
      </div>

      <Switch className="darkModeToggle"></Switch>

      {/* <div className="darkModeToggle">
        <p className="darkModeText">Dark Mode</p>
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div> */}

      <div className="contentContainer">
        <div className="headerText">
          <h2 className="pageHeader">My Budget</h2>
          <Tooltip
            className="tooltipHeader"
            placement="bottom"
            title="What do you want others to call you?"
          >
            <QuestionCircleOutlined />
          </Tooltip>
        </div>
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
