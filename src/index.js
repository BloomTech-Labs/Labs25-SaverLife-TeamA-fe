import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
} from 'react-router-dom';
import { Security, LoginCallback, SecureRoute } from '@okta/okta-react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import 'antd/dist/antd.less';
import 'bootstrap/dist/css/bootstrap.min.css';

import { NotFoundPage } from './components/pages/NotFound';
import { ProfileListPage } from './components/pages/ProfileList';
import { LoginPage } from './components/pages/Login';
import { HomePage } from './components/pages/Home';
import { PastSpendingPage } from './components/pages/PastSpending';
import { ProjectedSavingsPage } from './components/pages/ProjectedSavings';
import { config } from './utils/oktaConfig';
import { LoadingComponent } from './components/common';
import { mainReducer } from './reducers/mainReducer';

const store = createStore(
  mainReducer,
  compose(
    applyMiddleware(logger, thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>,
  document.getElementById('root')
);

function App() {
  // The reason to declare App this way is so that we can use any helper functions we'd need for business logic, in our case auth.
  // React Router has a nifty useHistory hook we can use at this level to ensure we have security around our routes.
  const history = useHistory();

  const authHandler = () => {
    // We pass this to our <Security /> component that wraps our routes.
    // It'll automatically check if userToken is available and push back to login if not :)
    history.push('/login');
  };

  return (
    <Security {...config} onAuthRequired={authHandler}>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/implicit/callback" component={LoginCallback} />
        {/* any of the routes you need secured should be registered as SecureRoutes */}
        <SecureRoute
          path="/"
          exact
          component={() => <HomePage LoadingComponent={LoadingComponent} />}
        />
        <SecureRoute path="/past-spending" component={PastSpendingPage} />
        <SecureRoute
          path="/projected-savings"
          component={ProjectedSavingsPage}
        />
        <SecureRoute path="/profile-list" component={ProfileListPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Security>
  );
}
