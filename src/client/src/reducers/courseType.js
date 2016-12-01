import { FETCH_COURSETYPES_SUCCESS } from '../constants'
import { List as list } from 'immutable';


const initialState = list([]);
const courseTypes = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSETYPES_SUCCESS:
     return list(action.data);
    default:
      return state;
  }
}

export default courseTypes;
