import { combineReducers } from 'redux';
import courseTypes from './courseType';
import course from './course';
import chapter from './chapter';
import video from './video';
import user from './user';

const  rootReducer = combineReducers({
    courseTypes,
    course,
    chapter,
    video,
    user
});

export default rootReducer;
