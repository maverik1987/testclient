import React, { Component } from 'react';
import { Field } from 'redux-form';
import { Button } from 'react-bootstrap';

export default ({
  handleSubmit,
  onClick,
  isFetching,
}) =>
  <form onSubmit={handleSubmit}>
    <Field
      name="room_id"
      component="input"
      type="text"
      className="form-control"
      placeholder="Room ID"/>
    <Field
      name="username"
      component="input"
      type="text"
      className="form-control"
      placeholder="Confluence username" />
    <Field
      name="password"
      component="input"
      type="password"
      className="form-control"
      placeholder="Confluence password" />
    <Button type="submit" bsStyle="primary">Join as publisher</Button>
  </form>
