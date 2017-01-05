import { FETCH_COURSE_SUCCESS , FETCH_COURSE_LIST_SUCCESS} from '../constants'
import { List as list , Map as map } from 'immutable';


const initialState = list([]);
const course = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_LIST_SUCCESS:
     return list(action.data);
    case FETCH_COURSE_SUCCESS:
      return map(action.data);
    default:
      return state;
  }
}

export default course;
