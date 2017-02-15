import {
  Map as map
} from 'immutable';
const jwt = require('jwt-simple');
import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  FETCH_PROTECTED_DATA_REQUEST,
  RECEIVE_PROTECTED_DATA
} from '../constants'


const initialState = map({
  token: null,
  userName: null,
  isAuthenticated: false,
  isAuthenticating: false,
  statusText: null
});

const user = (state = initialState, action) => {

  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return map({
        'isAuthenticating': false,
        'isAuthenticated': true,
        'token': action.payload.token,
        'userName': jwt.decode(action.payload.token, "xStmbyc066BOFn40gIr29y09Ud94z1P7").username,
        'statusText': 'You have been successfully logged in.'
      });
    case LOGIN_USER_FAILURE:
      return map({
        'isAuthenticating': false,
        'isAuthenticated': false,
        'token': null,
        'userName': null,
        'statusText': `Authentication Error: ${action.payload.status} ${action.payload.statusText}`
      });
    case LOGOUT_USER:
      return map({
        'isAuthenticated': false,
        'token': null,
        'userName': null,
        'statusText': 'You have been successfully logged out.'
      });
    default:
      return state;
  }
}

export default user;
