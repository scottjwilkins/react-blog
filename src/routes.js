import React from 'react';
import { Route, IndexRoute } from 'react-router';
import PostsIndex from './components/posts_index'

import App from './components/app';

const Greeting = () => {
  return <div>hey good looking!</div>
};

export default (
  <Route path="/" component={App} >
    <IndexRoute component={PostsIndex} />
  </Route>
);
