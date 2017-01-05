import { FETCH_CHAPTER_LIST_SUCCESS } from '../constants'
import { List as list } from 'immutable';


const initialState = list([]);
const chapter = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHAPTER_LIST_SUCCESS:
     return list(action.data);
    default:
      return state;
  }
}

export default chapter;
