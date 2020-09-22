import React from 'react';
import { useOktaAuth } from '@okta/okta-react';
import RenderNetIncomePage from './RenderNetIncomePage';

const NetIncomeContainer = props => {
  const { authService } = useOktaAuth();
  return <RenderNetIncomePage authService={authService} />;
};

export default NetIncomeContainer;
