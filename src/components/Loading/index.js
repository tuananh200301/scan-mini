import React from 'react';
import styles from './styles.module.scss'
import {Spin} from 'antd';

const Loading = () => {
  return (
    <div className={styles.loadingPageWrap}>
      <div className={styles.loadingBody}>
        <Spin size="large"/>
      </div>
    </div>
  );
}

export default Loading
