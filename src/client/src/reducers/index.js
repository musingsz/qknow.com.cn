import { combineReducers } from 'redux';
import courseTypes from './courseType';
import course from './course';
import chapter from './chapter';
import video from './video';

const  rootReducer = combineReducers({
    courseTypes,
    course,
    chapter,
    video
});

export default rootReducer;
