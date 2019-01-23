import React, { Component } from 'react';
import { Field } from 'redux-form';
import { Button } from 'react-bootstrap';
import { map } from 'lodash';
import cx from 'classnames';
import Card from 'containers/Card';
import style from './style.module.css';

export default ({
  handleSubmit,
  onClickDelete,
  isFetching,
  section,
  cards,
}) =>
  <div className={style.section_container}>
    <div className={style.title}>{section.title}</div>
    <Button onClick={onClickDelete} bsStyle="primary" className={style.minus}></Button>
    {
      map(cards, card => <Card key={card.id} card={card} />)
    }
    <form onSubmit={handleSubmit}>
      <Field
        name={`${section.id}.text`}
        component="input"
        type="text"
        className="form-control"
        placeholder="Card title"/>
      <Button type="submit" disabled={isFetching} bsStyle="primary">Add card</Button>
    </form>
  </div>
