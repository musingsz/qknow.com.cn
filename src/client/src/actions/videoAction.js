import axios from 'axios';
import config from '../../config/default.config';
import { FETCH_VIDEO_SUCCESS } from '../constants'






function fetchVideoSuccess(data){
  return{
    type:FETCH_VIDEO_SUCCESS,
    data
  }
}


//根据课程id获取详情
export function fetchVideoById(id){
  return (dispatch)=>{
    axios.get(config.API_URL+`/course/video/${id}`).then(function(response){
      if(response.status !== 200 && response.data.meta.code !== 200){
        throw new Error("Bad response from server");
      }
      return response.data.data;
    }).then(function(data){
      return dispatch(fetchVideoSuccess(data));
    })
  }
}
