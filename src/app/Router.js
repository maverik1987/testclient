import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Join from 'containers/Join';
import Room from 'containers/Room';

export default () =>
  <Switch>
    <Route exact path="/" component={Join} />
    <Route exact path="/room/:roomId" component={Room} />
  </Switch>
