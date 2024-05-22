import React, { useState } from 'react';
import { connect } from "react-redux";
import styles from './styles.module.scss';
import './styles.scss';

const HomePage = (props) => {
  const [userData, setUserData] = useState(null);
  const [initData, setInitData] = useState(null);
  const [initDataUnsafe, setInitDataUnsafe] = useState(null);
  const [userAgent, setUserAgent] = useState(null);

  const handleButtonClick = () => {
      window.Telegram.WebApp.ready();
      const initData = window.Telegram.WebApp.initData;
      const initDataUnsafe = window.Telegram.WebApp.initDataUnsafe;
      const userAgent = navigator.userAgent.toLowerCase();
      
      setUserData(initDataUnsafe.user);
      setInitData(initData);
      setInitDataUnsafe(initDataUnsafe);
      setUserAgent(userAgent);

      console.log('User data:', initDataUnsafe.user);
      console.log('Init Data:', initData);
      console.log('initDataUnsafe:', initDataUnsafe);

      if (userAgent.includes('telegram')) {
          console.log('User is using Telegram app');
      } else if (window.Telegram && window.Telegram.WebApp) {
          const platform = window.Telegram.WebApp.platform;
          if (platform === 'tdesktop' || platform === 'android' || platform === 'ios') {
              console.log('User is using Telegram app');
          } else {
              console.log('User is using Telegram web');
          }
      } else {
          console.log('User is using Telegram web');
      }
  };


  return (
    <div className={styles.aridropWrap} >
    <h1>Welcome to Telegram Web App</h1>
    {userData && (
      <div>
          <p><strong>User Data:</strong>Họ tên: {userData.first_name} {userData.last_name}</p>
          <p><strong>Init Data:</strong>Username: {userData.username}</p>
          <p><strong style={{maxWidth: 420}}>Init Data:</strong> {initData}</p>
      </div>
  )}
     <div className={styles.btnCreate} onClick={handleButtonClick}>Create account</div>
    </div>
  );
}

export default connect(
  state => ({
  
  }),
  {
  }
)(HomePage);
