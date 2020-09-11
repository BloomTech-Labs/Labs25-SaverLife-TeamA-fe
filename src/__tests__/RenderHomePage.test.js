import RenderHomePage from '../components/pages/Home/RenderHomePage';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { mainReducer } from '../reducers/mainReducer';

const store = createStore(mainReducer, applyMiddleware(thunk));

describe('<RenderHomePage /> test suite', () => {
  test('it handles a loading state', () => {
    const authService = {
      logout: jest.fn(),
    };
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <RenderHomePage authService={authService} />
        </Router>
      </Provider>
    );
    const navbar = getByText(/home/i);
    expect(navbar.innerHTML).toBe('Home');
  });
});
