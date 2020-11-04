import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import AppHeader from './header';
import HomePage from 'pages/home';
import StateViewPage from 'pages/state-view';

function App() {
  return (
    <main>
      <AppHeader />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/states/:stateId" component={StateViewPage} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
