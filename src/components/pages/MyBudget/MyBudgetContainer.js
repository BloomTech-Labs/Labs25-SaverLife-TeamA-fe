import React from 'react';
import { useOktaAuth } from '@okta/okta-react';
import RenderMyBudgetPage from './RenderMyBudgetPage';

const MyBudgetContainer = props => {
  const { authService } = useOktaAuth();
  return <RenderMyBudgetPage authService={authService} />;
};

export default MyBudgetContainer;
