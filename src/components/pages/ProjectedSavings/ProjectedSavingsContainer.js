import React from 'react';
import { useOktaAuth } from '@okta/okta-react';
import RenderProjectedSavingsPage from './RenderProjectedSavingsPage';

const ProjectedSavingsContainer = props => {
  const { authService } = useOktaAuth();
  return <RenderProjectedSavingsPage authService={authService} />;
};

export default ProjectedSavingsContainer;
