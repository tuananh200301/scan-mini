import _ from "lodash";

export const formatNumber = (number) => {
  let result = 0
  if (number) {
    result = new Intl.NumberFormat().format(number);
  }
  return result
};

export const formatWalletAddress = (address) => {
  let result = ''
  if (address) {
    result = `${address.substr(0, 8)}....${address.substr(-3)}`;
  }
  return result
};

export const secondToTimeString = (second, showHours = false) => {
  if (showHours) {
    let hours   = Math.floor(second / 3600);
    let minutes = Math.floor((second - (hours * 3600)) / 60);
    let seconds = second - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
  }

  let minutes = Math.floor(second / 60);
  let seconds = second - (minutes * 60);

  if (minutes < 10) {minutes = "0"+minutes;}
  if (seconds < 10) {seconds = "0"+seconds;}
  return minutes+':'+seconds;
};

export const getImageUrl = (img) => {
  return process.env.REACT_APP_API_URL + '/' + img
};

// export const getAccessToken = () => {
//   const cookies = new Cookies()
//   return cookies.get('isLogin') ? cookies.get('isLogin') : ''
// };
//
// export const setAccessToken = (token) => {
//   const cookies = new Cookies()
//   cookies.set('isLogin', token)
// };
//
// export const removeAccessToken = () => {
//   const cookies = new Cookies()
//   return cookies.remove('isLogin')
// };

export const getAccessToken = () => {
  return localStorage.getItem('token')
};

export const setAccessToken = (token) => {
  localStorage.setItem('token', token)
};

export const removeAccessToken = () => {
  localStorage.removeItem('token')
};

export const setObjectLocalStorage = (key, item) => {
  localStorage.setItem(key, JSON.stringify(item))
};

export const getObjectLocalStorage = (key, path = '') => {
  let result = JSON.parse(localStorage.getItem(key))
  if (!result) {
    result = {}
  }
  if (path) {
    return _.get(result, path, {})
  }
  return result
};

