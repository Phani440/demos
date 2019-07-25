import React from 'react';
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import { Provider } from 'mobx-react';
import Notifications from 'react-notify-toast';

import './App.scss';

import HomePage from './pages/home/HomePage';
import PostPage from './pages/post/PostPage';
import stores from './stores';
import UserPage from './pages/user/UserPage';

function App() {
  return (
    <Provider {...stores}>
      <Router>
        <Notifications />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Redirect to="/home" />}
          />

          <Route exact path="/home" component={HomePage}/>
          <Route
            exact
            path="/user/:userId/:pageNum?"
            render={({ match, ...remainingProps }) => (
              <UserPage
                key={`${match.params.userId}/${match.params.pageNum}`}
                match={match}
                {...remainingProps}
              />
            )}
          />
          <Route exact path="/post/:postId" component={PostPage}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
