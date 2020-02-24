/**
 * ************************************
 *
 * @module  userActions.js
 * @author team snapdesk
 * @date 02/23/2020
 * @description Action Creators for userReducer
 *
 * ************************************
 */

// import actionType constants
import axios from 'axios';
import * as types from '../constants/actionTypes';

export const verifyLogin = () => dispatch =>
  axios
    .get('/login/verify')
    .then(({ data }) =>
      dispatch({
        type: types.USER_LOGIN,
        payload: data,
      })
    )
    .catch(err => console.log(err));
