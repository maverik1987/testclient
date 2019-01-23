import React from 'react';
import JoinAsUser from 'containers/JoinAsUser';
import JoinAsPublisher from 'containers/JoinAsPublisher';
import style from './style.module.css';

export default () =>
  <div className={style.container}>
    <div className={style.leftside}>
      <JoinAsUser />
    </div>
    <div className={style.rightside}>
      <JoinAsPublisher />
    </div>
  </div>
