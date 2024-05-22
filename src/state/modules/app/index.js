import {createReducer} from 'redux-create-reducer';
import callAPI from "../../../utils/callAPI";

export const BOOT = 'BOOT';
export const BOOT_FINISHED = 'BOOT_FINISHED';
export const SET_TRANSACTION_LOADING = 'SET_TRANSACTION_LOADING';
export const SET_BUTTON_LOADING = 'SET_BUTTON_LOADING';

export const SET_USER_DATA = 'SET_USER_DATA';
export const SET_INIT_DATA = 'SET_INIT_DATA';
export const SET_INIT_DATA_UNSAFE = 'SET_INIT_DATA_UNSAFE';

const defaultState = {
  isBooting: false,
  bootDidFinish: false,
  loginButtonLoading: false,
  transactionLoading: false,
  userData: null,
  initData: null,
  initDataUnsafe: null,
};

const reducer = createReducer(defaultState, {
  [BOOT]: state => ({
    ...state,
    isBooting: true,
    bootDidFinish: false
  }),
  [BOOT_FINISHED]: state => ({
    ...state,
    isBooting: false,
    bootDidFinish: true
  }),
  [SET_TRANSACTION_LOADING]: (state, action) => ({
    ...state, transactionLoading: action.payload
  }),
  [SET_BUTTON_LOADING]: (state, action) => ({
    ...state, loginButtonLoading: action.payload
  }),
  [SET_USER_DATA]: (state, action) => ({
    ...state, userData: action.payload
  }),
  [SET_INIT_DATA]: (state, action) => ({
    ...state, initData: action.payload
  }),
  [SET_INIT_DATA_UNSAFE]: (state, action) => ({
    ...state, initDataUnsafe: action.payload
  }),
});

export default reducer;
export const namespace = 'app';

export const boot = (options = {}) => ({
  type: BOOT,
  payload: options
});

export const bootFinished = () => ({
  type: BOOT_FINISHED
});


export const setTransactionLoading = (payload) => ({
  type: SET_TRANSACTION_LOADING,
  payload: payload
});

export const setButtonLoading = (payload) => ({
  type: SET_BUTTON_LOADING,
  payload: payload
});

export const setUserData = (payload) => ({
  type: SET_USER_DATA,
  payload: payload
});

export const setInitData = (payload) => ({
  type: SET_INIT_DATA,
  payload: payload
});

export const setInitDataUnsafe = (payload) => ({
  type: SET_INIT_DATA_UNSAFE,
  payload: payload
});

// export const getAuthInfo = () => async (dispatch, getState) => {
//   return await callAPI({
//     method: 'get',
//     apiPath: '/auth/me',
//     actionTypes: [REQUEST_AUTH_INFO, REQUEST_AUTH_INFO_SUCCESS, REQUEST_AUTH_INFO_FAILURE],
//     variables: {},
//     dispatch,
//     getState
//   });
// };


export const isBooting = state => state.app.isBooting;
export const bootDidFinish = state => state.app.bootDidFinish;
