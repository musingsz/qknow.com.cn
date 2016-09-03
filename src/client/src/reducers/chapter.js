import { FETCH_CHAPTER_LIST_SUCCESS } from '../constants'
import { List, Map } from 'immutable';


const initialState = List([]);
const chapter = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHAPTER_LIST_SUCCESS:
     return List(action.data);
     break;
    default:
      return state;
      break;
  }
}

export default chapter;
