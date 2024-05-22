import React from 'react';
import { connect } from "react-redux";
import styles from './styles.module.scss';
import './styles.scss';
import { setInitData, setInitDataUnsafe, setUserData } from 'state/modules/app';

const HomePage = (props) => {

  const handleButtonClick = () => {
    window.Telegram.WebApp.ready();
    const initData = window.Telegram.WebApp.initData;
    const initDataUnsafe = window.Telegram.WebApp.initDataUnsafe;

    props.setUserData(initDataUnsafe.user);
    props.setInitData(initData);
    props.setInitDataUnsafe(initDataUnsafe);
  };

  return (
    <div className={styles.scanWrap} >
      <h1>Welcome to Telegram Web App</h1>
      {props.userData ? (
        <div>
          <p><strong>Họ tên:</strong> {props.userData.first_name} {props.userData.last_name}</p>
          <p><strong>Username:</strong> {props.userData.username}</p>
          <p><strong>Id:</strong> {props.userData.id}</p>
        </div>
      )
        : <div className={styles.btnCreate} onClick={handleButtonClick}>Create account</div>
      }
    </div>
  );
}

export default connect(
  state => ({
    userData: state.app.userData,
  }),
  {
    setUserData,
    setInitData,
    setInitDataUnsafe,
  }
)(HomePage);
