import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';

import Spinner from 'components/spinner';
import HomePage from 'pages/home';
import loadStats from 'actions/states';

interface AppProps {
  loadStats: React.EffectCallback
}

function App({ loadStats }: AppProps) {
  
  React.useLayoutEffect(loadStats, [loadStats]);

  return (
    <BrowserRouter>
        <main>
          <Switch>
            <Route path="/:stateId?" exact component={HomePage} />
            <Redirect to="/" />
          </Switch>
          <Spinner />
        </main>
    </BrowserRouter>
  );
}

const mapDispatchToProps = {
	loadStats
}

export default connect(null, mapDispatchToProps)(App);
