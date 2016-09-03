import { FETCH_COURSE_SUCCESS , FETCH_COURSE_LIST_SUCCESS} from '../constants'
import { List, Map } from 'immutable';


const initialState = List([]);
const course = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_LIST_SUCCESS:
     return List(action.data);
     break;
    case FETCH_COURSE_SUCCESS:
      return Map(action.data);
      break;
    default:
      return state;
      break;
  }
}

export default course;
