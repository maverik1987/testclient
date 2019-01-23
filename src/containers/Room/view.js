import React, { Component } from 'react';
import { Field } from 'redux-form';
import { Button } from 'react-bootstrap';
import { map } from 'lodash';
import cx from 'classnames';
import Section from 'containers/Section';
import style from './style.module.css';

export default ({
  handleSubmit,
  onClickExit,
  isFetching,
  sections,
}) =>
  <div className={style.container}>
    {
      map(sections, section => <Section key={section.id} section={section} />)
    }
    <div className={style.new_section}>
      <form onSubmit={handleSubmit}>
        <Field
          name="section.title"
          component="input"
          type="text"
          className={cx('form-control', style.input)}
          placeholder="Section title"/>
        <Button
          type="submit"
          disabled={isFetching}
          bsStyle="primary"
          className={style.plus}></Button>
      </form>
    </div>
    <Button onClick={onClickExit} className={style.exit_button}>Leave room</Button>
  </div>