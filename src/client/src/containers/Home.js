import React, {Component} from "react";
import radium from 'radium';
import RaisedButton from 'material-ui/RaisedButton';
import {  Link } from 'react-router'
import { connect } from 'react-redux';
import toolCourse from '../images/tool.jpg';
import webCourse from '../images/web.jpg';
import linuxCourse from '../images/linux.jpg';
import phpCourse from '../images/php7.jpg';
import nodeCourse from '../images/node.jpg';
import webchatCourse from '../images/webchat.png';
import { fetchCourseTypes } from '../actions/courseTypeActions';
import style from "./home/home.css"


const styleR={
  base:{},
  img:{
    width:'100%',
    height:'100%'
  }
}


class Home extends Component{
  // constructor(props){
  //   super(props);
  // }

 // load coure
  componentDidMount = () =>{
    //const { onLoadCourseType } = this.props;
  //  onLoadCourseType();
  }

  render(){
    return (
      <div className="container" style={[style.base]}>
        <div className="row" style={[style.span]}>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
            <span>更加优秀的你，在未来等你</span>
          </div>
        </div>
        <div className="row" style={[style.category]} >
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6"  >
            <div style={[style.one]}>
              <Link to={`/coursetype/1/course`}>
                <img src={webCourse} alt="" style={[styleR.img]}   />
              </Link>
            </div>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3" >
          <div style={[style.two]} >
            <Link to={`/course`}>
              <img src={phpCourse} alt="" style={[styleR.img]}   />
            </Link>
          </div>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3" >
            <div style={[style.three]}>
                <Link to={`/course`}>
                  <img src={nodeCourse} alt="" style={[styleR.img]}   />
                </Link>
            </div>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3"  >
            <div style={[style.four]}>
              <Link to={`/course`}>
                <img src={webchatCourse} alt="" style={[styleR.img]}   />
              </Link>
            </div>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" >
            <div style={[style.five]}>
              <Link to={`/course`}>
                <img src={linuxCourse} alt="" style={[styleR.img]}   />
              </Link>
            </div>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3" >
            <div style={[style.six]}>
              <Link to={`/course`}>
                <img src={toolCourse} alt="" style={[styleR.img]}   />
              </Link>
            </div>
          </div>
        </div>
        <div className="row" style={[style.categorySecond]} >

        </div>
        <div className="row" style={[style.center]}>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <RaisedButton label="浏览所有系列课程 >>>" backgroundColor='rgba(72, 70, 109, 1)' labelStyle={style.btnLabelStyle}  style={style.btnStyle} />
          </div>
        </div>
      </div>

    )
  }
};


//add state to props
const mapStateToProps = (state) => {
  return {
    courseTypesList:state.courseTypes
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onLoadCourseType : ()=>{
      dispatch(fetchCourseTypes())
    }
  }
}


export default  connect(
  mapStateToProps,
  mapDispatchToProps
)(radium(Home))
