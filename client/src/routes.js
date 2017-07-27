import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import ShowPost from './ui/posts/ShowPost';

import App from './ui/App';
import PostList from './ui/posts/PostList';
import NewPost from './ui/posts/NewPost';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={PostList} />
      <Route path='/posts/new' component={NewPost} />
      <Route path='/posts/:post_id' component={ShowPost} />
    </Route>
  </Router>
);