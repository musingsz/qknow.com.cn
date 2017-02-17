import React, {Component} from "react";
import radium from 'radium';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import {  Link } from 'react-router';

import { fetchVideoById } from '../actions/videoAction';
import { fetchCourseById } from '../actions/courseActions';
//import Madia from '../components/Media';
import PlyrMidea from '../components/PlyrMidea'
import bgQknow from '../images/qknow.jpg';



const style = {
  base:{

  },
  video:{
    height:700
  },
  couseName:{
    fontSize:30
  },
  des:{
    marginTop:20,
    marginBottom:10
  },
  couseIntro:{
    fontSize:18,
    lineHeight:1.3
  },
  pre:{
    marginRight:20
  }
}


class Video extends Component{
  componentDidMount = ()=>{
    let token = this.props.user.get("token");
    let issued = this.props.user.get("issued");
    this.props.onLoadVideo(this.props.params.id,token,issued);
    this.props.onLoadCourse(this.props.params.courseId);
  }




  render(){
    const { video } = this.props;

    //上一节
    const preButton = video.get('pre_video') ? (
      <RaisedButton  containerElement={<Link to={`/course/${this.props.params.courseId}/video/${video.get('pre_video')}`} />}
       label="上一节"  target="_blank" primary={true} style={style.pre} />
    ) : (
      <RaisedButton disabled label="上一节" primary={true} style={style.pre} />
    );

    //下一节
    const nextButton = video.get('next_video') ? (
      <RaisedButton containerElement={<Link to={`/course/${this.props.params.courseId}/video/${video.get('next_video')}`} />}
       label="下一节"  target="_blank" primary={true}  />
    ) : (
      <RaisedButton disabled  label="下一节" primary={true}  />
    );

    //http://qknow1.oss-cn-shanghai.aliyuncs.com/chrome_01_2016-08-29_222508.mp4
    return (
      <div className="container" >
        <div className="row" >
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={[style.video]}>
            <PlyrMidea source={{type:'video',
                       sources:[
                         {
                           src:video.get("URL"),
                           type:'video/mp4'
                          }
                       ],
                       poster:bgQknow
                     }}
             options={{}} >
            </PlyrMidea>
         </div>
        </div>
        <div className="row between-lg" style={[style.des]}>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" >
            <span style={[style.couseName]}>{video.get('title')}</span>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" >
            <div className="row end-xs" >
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {preButton}
                {nextButton}
              </div>
            </div>
          </div>
        </div>
        <div className="row" >
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
              <span style={[style.couseIntro]}>
              {video.get('sub_title')}
              </span>
          </div>
        </div>
      </div>
    )
  }
};


const mapStateToProps = (state) => {
  return {
      video:state.video,
      course:state.course,
      user:state.user
  }
};

const mapDispatchToProps = (dispatch) =>{
  return {
    onLoadVideo:(id,token,issued)=>{
      dispatch(fetchVideoById(id,token,issued))
    },
    onLoadCourse:(id)=>{
      dispatch(fetchCourseById(id))
    }

  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(radium(Video));
