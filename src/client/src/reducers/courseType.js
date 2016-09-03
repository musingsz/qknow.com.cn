import { FETCH_COURSETYPES_SUCCESS } from '../constants'
import { List } from 'immutable';


const initialState = List([]);
const courseTypes = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSETYPES_SUCCESS:
     return List(action.data);
     break;
    default:
      return state;
      break;
  }
}

export default courseTypes;
