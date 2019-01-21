import React, { Component } from 'react';
import { Route, Switch } from 'react-router' // react-router v4
import Login from 'containers/Login';
import ConfluenceAuth from 'containers/ConfluenceAuth';

export default () =>
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/auth" component={ConfluenceAuth} />
  </Switch>
