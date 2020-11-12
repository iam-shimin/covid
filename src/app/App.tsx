import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { Provider } from 'react-redux';

// import AppHeader from 'components/header';
import Spinner from 'components/spinner';
import HomePage from 'pages/home';
import store from '../store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <main>
          {/* <AppHeader /> */}
          <Switch>
            <Route path="/:stateId?" exact component={HomePage} />
            <Redirect to="/" />
          </Switch>
          <Spinner />
        </main>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
