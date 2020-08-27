import React from 'react';
import { useOktaAuth } from '@okta/okta-react';
import RenderPastSpendingPage from './RenderPastSpendingPage';

const PastSpendingContainer = props => {
  const { authService } = useOktaAuth();
  return <RenderPastSpendingPage authService={authService} />;
};

export default PastSpendingContainer;
