import { FETCH_VIDEO_SUCCESS } from '../constants'
import { Map as map } from 'immutable';


const initialState = map([]);
const video = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VIDEO_SUCCESS:
      return map(action.data);
    default:
      return state;
  }
}

export default video;
