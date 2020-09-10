import React, { useEffect } from 'react';
import { Progress, Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

import { getBudgetAction } from '../../../actionCreators/mainActions.js';
import BudgetComparisonContainer from '../../charts/BudgetComparison/BudgetComparisonContainer';
import { Navbar } from '../../common/index';
import '../../../styles/Navbar.css';

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

  return (
    <div className="pageContainer">
      <div className="navContainer">
        <Navbar home={true} authService={authService} />
      </div>

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
        <div className="budgetComparison">
          <BudgetComparisonContainer
            categoryGoals={futureBudget}
            categoryCurrent={currentMonthlySpending}
          />
        </div>
      </div>

      <div className="progressBarContainer">
        {/* TODO: Change Progress Bar to #00a6af when percent is at 100 */}
        <Progress
          className="progressBar"
          strokeColor={{ '0%': '#ecb7db', '100%': '#c01089' }}
          percent={70}
          strokeWidth={20}
          showInfo={false}
        />
      </div>
    </div>
  );
}
export default RenderHomePage;
