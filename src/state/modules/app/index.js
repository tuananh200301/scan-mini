import {createReducer} from 'redux-create-reducer';
import callAPI from "../../../utils/callAPI";

export const BOOT = 'BOOT';
export const BOOT_FINISHED = 'BOOT_FINISHED';
export const SET_TRANSACTION_LOADING = 'SET_TRANSACTION_LOADING';
export const SET_BUTTON_LOADING = 'SET_BUTTON_LOADING';

const defaultState = {
  isBooting: false,
  bootDidFinish: false,
  loginButtonLoading: false,
  transactionLoading: false,
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
