import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { Provider } from 'react-redux';

import AppHeader from 'components/header';
import HomePage from 'pages/home';
import StateViewPage from 'pages/state-view';
import store from '../store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <main>
          <AppHeader />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/states/:stateId" component={StateViewPage} />
            <Redirect to="/" />
          </Switch>
        </main>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
