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
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import 'antd/dist/antd.less';

import { NotFoundPage } from './components/pages/NotFound';
import { ProfilePage } from './components/pages/Profile';
import { LoginPage } from './components/pages/Login';
import { HomePage } from './components/pages/Home';
import { MyBudgetPage } from './components/pages/MyBudget';
import { PastSpendingPage } from './components/pages/PastSpending';
import { NetIncomePage } from './components/pages/NetIncome';
import { config } from './utils/oktaConfig';
import { LoadingComponent } from './components/common';
import { mainReducer } from './reducers/mainReducer';

const store = createStore(mainReducer, applyMiddleware(logger, thunk));

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </Router>,
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
        <SecureRoute path="/my-budget" component={MyBudgetPage} />
        <SecureRoute path="/past-spending" component={PastSpendingPage} />
        <SecureRoute path="/net-income" component={NetIncomePage} />
        <SecureRoute path="/my-account" component={ProfilePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Security>
  );
}
