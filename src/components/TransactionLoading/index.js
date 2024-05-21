import React from 'react';
import styles from './styles.module.scss'
import {Spin} from 'antd';
import {useSelector} from "react-redux";

const TransactionLoading = () => {
  const transactionLoading = useSelector((state) => state.app.transactionLoading);

  return (
    <>
      {
        transactionLoading && (
          <div className={styles.loadingPageWrap}>
            <div className={styles.loadingBody}>
              <div className={styles.statusText}>
                The transaction is in progress, please wait for a few seconds...
              </div>
              <Spin size="large"/>
            </div>
          </div>
        )
      }
    </>
  );
}

export default TransactionLoading
