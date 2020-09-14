import React from 'react';
import RenderProfilePage from '../components/pages/Profile/RenderProfilePage';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { mainReducer } from '../reducers/mainReducer';

const store = createStore(mainReducer, applyMiddleware(thunk));

test('loads the users profile', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Router>
        <RenderProfilePage />
      </Router>
    </Provider>
  );
  const element = getByText(/log out/i);
  expect(element.textContent).toBe('Log Out');
});
