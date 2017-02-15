import axios from 'axios';
import { browserHistory } from 'react-router';
import config from '../../config/default.config';
import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  FETCH_PROTECTED_DATA_REQUEST,
  RECEIVE_PROTECTED_DATA
} from '../constants'


export function loginUserSuccess(token) {
  localStorage.setItem('token', token);
  return {
    type: LOGIN_USER_SUCCESS,
    payload: {
      token: token
    }
  }
}


export function loginUserFailure(error) {
  localStorage.removeItem('token');
  return {
    type: LOGIN_USER_FAILURE,
    payload: {
      status: error.response.status,
      statusText: error.response.statusText
    }
  }
}

export function loginUserRequest() {
  return {
    type: LOGIN_USER_REQUEST
  }
}

export function logout() {
  localStorage.removeItem('token');
  return {
    type: LOGOUT_USER
  }
}


export function logoutAndRedirect() {
  return (dispatch, state) => {
    dispatch(logout());
    browserHistory.push("/user/login");
  }
}


export function loginUser(username, password, redirect = "/") {

  return (dispatch) => {
    axios.post(config.API_URL + `/login`,{
      username: username,
      password: password
    }).then(function(response) {
      if (response.status !== 200 && response.data.meta.code !== 200) {
        throw new Error("Bad response from server");
      }
      return response.data.data;
    }).then(function(response) {
      try {

        dispatch(loginUserSuccess(response.token));
        browserHistory.push(redirect);

      } catch (e) {
        console.log("e",e);

        dispatch(loginUserFailure({
          response: {
            status: 403,
            statusText: 'Invalid token'
          }
        }));
      }
    }).catch(error => {
      dispatch(loginUserFailure(error));
    })
  }
}
