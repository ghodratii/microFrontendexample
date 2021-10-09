import React, { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';
import Progress from './components/Progress';
import Header from './components/Header';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});
const history = createBrowserHistory();
export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  useEffect(() => {
    if (isSignedIn) {
      history.push('/');
    }
  }, [isSignedIn]);
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header onSignOut={() => setIsSignedIn(false)}
            isSignedIn={isSignedIn} />
          <Suspense fallback={<Progress />}>
            <Switch>
              {/* <Route path="/auth" component={AuthLazy} /> */}
              <Route path="/auth">
                <AuthLazy onSignIn={() => setIsSignedIn(true)} />
              </Route>
              <Route path="/" component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
