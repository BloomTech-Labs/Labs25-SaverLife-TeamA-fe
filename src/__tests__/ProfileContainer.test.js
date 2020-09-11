import React from 'react';
import { render, act } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProfilePage } from '../components/pages/Profile';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { mainReducer } from '../reducers/mainReducer';

const store = createStore(mainReducer, applyMiddleware(thunk));

jest.mock('../api', () => {
  return { getProfileData: () => Promise.resolve([]) };
});

jest.mock('@okta/okta-react', () => ({
  useOktaAuth: () => {
    return {
      authState: {
        isAuthenticated: true,
      },
      authService: {},
    };
  },
}));

describe('<ProfileContainer />', () => {
  test('renders a loading state upon loading and calling for profiles', async () => {
    const promise = Promise.resolve();
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <ProfilePage />
        </Router>
      </Provider>
    );
    const profileName = getByText(/john smith/i);
    expect(profileName.innerHTML).toBe('John Smith');
    await act(() => promise);
  });
});
