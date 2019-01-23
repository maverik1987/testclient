import React, { Component } from 'react';
import { Field } from 'redux-form';
import { Button } from 'react-bootstrap';
import style from './style.module.css';

export default ({
  handleSubmit,
  onClick,
  isFetching,
  card,
  isEdit = false,
}) =>
  isEdit ?
    <form onSubmit={handleSubmit} className={style.container}>
      <Field
        name="text"
        component="input"
        type="text"
        className="form-control"
        value={card.text}
        placeholder="Section title"/>
      <Button type="submit" disabled={isFetching} bsStyle="primary">Add section</Button>
    </form>
    :
    <div className={style.card_text}>{card.text}</div>
