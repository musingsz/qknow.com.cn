import React, {Component} from "react";
import radium from 'radium';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';


import { fetchVideoById } from '../actions/videoAction';
import { fetchCourseById } from '../actions/courseActions';
import Madia from '../components/Media';
import bgQknow from '../images/qknow.jpg';



const style = {
  base:{

  },
  video:{
    height:750
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
    this.props.onLoadVideo(this.props.params.id);
    this.props.onLoadCourse(this.props.params.courseId);
  }




  render(){
    const { video } = this.props;
    //http://qknow1.oss-cn-shanghai.aliyuncs.com/chrome_01_2016-08-29_222508.mp4
    return (
      <div className="container" >
        <div className="row" >
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={[style.video]}>
            <Madia src='http://qknow1.oss-cn-shanghai.aliyuncs.com/chrome_01_2016-08-29_222508.mp4'  poster={bgQknow} >
            </Madia>
         </div>
        </div>
        <div className="row between-lg" style={[style.des]}>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" >
            <span style={[style.couseName]}>{video.get('title')}</span>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" >
            <div className="row end-xs" >
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <RaisedButton label="上一节" primary={true} style={style.pre} />
                <RaisedButton label="下一节" primary={true}  />
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
      course:state.course
  }
};

const mapDispatchToProps = (dispatch) =>{
  return {
    onLoadVideo:(id)=>{
      dispatch(fetchVideoById(id))
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
