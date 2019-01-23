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
      placeholder="Username"/>
    <Button type="submit" disabled={isFetching} bsStyle="primary">Join</Button>
    <Button disabled={isFetching} onClick={onClick}>Fetch content</Button>
  </form>