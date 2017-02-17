import {
  Map as map
} from 'immutable';
const jwt = require('jwt-simple');
import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  FETCH_PROTECTED_DATA_REQUEST,
  RECEIVE_PROTECTED_DATA
} from '../constants'


const initialState = map({
  token: null,
  userName: null,
  isAuthenticated: false,
  isAuthenticating: false,
  statusText: null,
  isCreateUser: false,
  role: 0
});

const user = (state = initialState, action) => {

  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return map({
        'isAuthenticating': false,
        'isAuthenticated': true,
        'token': action.payload.token,
        'userName': jwt.decode(action.payload.token, "xStmbyc066BOFn40gIr29y09Ud94z1P7").username,
        'statusText': 'You have been successfully logged in.',
        isCreateUser: false,
        role: jwt.decode(action.payload.token, "xStmbyc066BOFn40gIr29y09Ud94z1P7").role
      });
    case LOGIN_USER_FAILURE:
      return map({
        'isAuthenticating': false,
        'isAuthenticated': false,
        'token': null,
        'userName': null,
        'statusText': `Authentication Error: ${action.payload.status} ${action.payload.statusText}`,
        isCreateUser: false,
        role: 0
      });
    case LOGOUT_USER:
      return map({
        'isAuthenticated': false,
        'token': null,
        'userName': null,
        'statusText': 'You have been successfully logged out.',
        isCreateUser: false,
        role: 0
      });
    case CREATE_USER_SUCCESS:
      return map({
        'isAuthenticated': false,
        'token': null,
        'userName': null,
        'statusText': 'You have been successfully create user',
        isCreateUser: true,
        role: 0
      });
    case CREATE_USER_FAILURE:
      return map({
        'isAuthenticated': false,
        'token': null,
        'userName': null,
        'statusText': 'You have been failsure create user',
        isCreateUser: false,
        role: 0
      });
    default:
      return state;
  }
}

export default user;
