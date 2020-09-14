import React from 'react';
import { useOktaAuth } from '@okta/okta-react';
import RenderProfilePage from './RenderProfilePage';

const ProfileContainer = props => {
  const { authService } = useOktaAuth();
  return <RenderProfilePage authService={authService} />;
};

export default ProfileContainer;
