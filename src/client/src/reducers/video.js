import { FETCH_VIDEO_SUCCESS } from '../constants'
import { Map } from 'immutable';


const initialState = Map([]);
const video = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VIDEO_SUCCESS:
      return Map(action.data);
      break;
    default:
      return state;
      break;
  }
}

export default video;
