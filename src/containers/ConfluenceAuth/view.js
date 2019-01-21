import React, { Component } from 'react';
import { Field } from 'redux-form';
import { Button } from 'react-bootstrap';
import style from './style.module.css';

export default ({
  handleSubmit,
  onClick,
  isFetching,
}) => {
  console.log('isFetching', isFetching)
  return (
  <form onSubmit={handleSubmit}>
    <Field name="username" component="input" type="text" className="form-control" placeholder="Confluence username"/>
    <Field name="password" component="input" type="password" className="form-control"
           placeholder="Confluence password"/>
    <Button type="submit" bsStyle="primary">Log in to confluence</Button>
    <Button disabled={isFetching} onClick={onClick}>Fetch content</Button>
  </form>
  )
}