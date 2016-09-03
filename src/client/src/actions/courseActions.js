import axios from 'axios';
import config from '../../config/default.config';
import { FETCH_COURSE_SUCCESS , FETCH_COURSE_LIST_SUCCESS} from '../constants'

function fetchCourseListSuccess(data){
  return{
    type:FETCH_COURSE_LIST_SUCCESS,
    data
  }
}

function fetchCourseSuccess(data){
  return{
    type:FETCH_COURSE_SUCCESS,
    data
  }
}


//根据课程分类id获取所有id
export function fetchCourseByCourseTypeId(id){
  return (dispatch)=>{
    axios.get(config.API_URL+`/api/v1/courses/${id}`).then(function(response){
      if(response.status !== 200 && response.data.meta.code !== 200){
        throw new Error("Bad response from server");
      }
      return response.data.data;
    }).then(function(data){
      return dispatch(fetchCourseListSuccess(data));
    })
  }
}

//根据课程id获取详情
export function fetchCourseById(id){
  return (dispatch)=>{
    axios.get(config.API_URL+`/api/v1/course/detail/${id}`).then(function(response){
      if(response.status !== 200 && response.data.meta.code !== 200){
        throw new Error("Bad response from server");
      }
      return response.data.data;
    }).then(function(data){
      return dispatch(fetchCourseSuccess(data));
    })
  }
}
