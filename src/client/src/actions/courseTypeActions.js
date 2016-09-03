import axios from 'axios';
import config from '../../config/default.config';
import { FETCH_COURSETYPES_SUCCESS } from '../constants'

function fetchCourseTypesSuccess(data){
  return{
    type:FETCH_COURSETYPES_SUCCESS,
    data
  }
}



export function fetchCourseTypes(){
  return (dispatch)=>{
    axios.get(config.API_URL+'/api/v1/courseTypes').then(function(response){
      if(response.status !== 200 && response.data.meta.code !== 200){
        throw new Error("Bad response from server");
      }
      return response.data.data;
    }).then(function(data){
      return dispatch(fetchCourseTypesSuccess(data));
    })
  }
}
