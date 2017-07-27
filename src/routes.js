import React from 'react';
import {Router, Route, IndexRedirect} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './containers/App';
import Posts from './containers/Posts';
import CreatePost from './containers/CreatePost';

injectTapEventPlugin();

const Routes = props => (
  <MuiThemeProvider>
    <Router {...props}>
      <Route path="/" component={App}>
        <IndexRedirect to="posts" />
        <Route path="posts" component={Posts}/>
        <Route path="add-post" component={CreatePost}/>
      </Route>
    </Router>
  </MuiThemeProvider>
);

export default Routes;
