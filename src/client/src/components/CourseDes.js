import React, {Component} from "react";
import radium from 'radium';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { fetchCourseById } from '../actions/courseActions';
import Icon from './Icon';

const style ={
  wrap:{
    marginTop:15,
    minHeight:255
  },
  image:{
    height: 180,
    width: 300,
    textAlign: 'center',
    display: 'inline-block',
  },
  title:{
    color:'#FFF',
    fontSize:40,
    margin:0
  },
  subTitle:{
    color:'#FFF',
    fontSize:18,
    marginTop:10,
    lineHeight:1.5,
    marginBottom:20
  },
  button:{
    marginRight:20
  }
}

class CourseDes extends Component{
  //load course
  componentDidMount = () =>{
    this.props.onLoadCourse(this.props.params.courseId);
  }

  render(){
    const { course } = this.props;
    return (
      <div className="container" style={[style.wrap]}>
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
            <Paper style={style.image} zDepth={2} >
              <img src={course.get("image")} style={{width:'100%', height:'100%'}} alt="" />
            </Paper>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-8 col-lg-8">
            <p style={[style.title]}>{course.get("title")}</p>
            <p style={[style.subTitle]}>{course.get("sub_title")}</p>

             <RaisedButton label={`${course.get("chapter_count")}章节`}  style={style.button} />
             <RaisedButton label={`${course.get("chapter_count")}分钟`}   />

          </div>
        </div>
        <Icon  />
      </div>
    )
  }
};


const mapStateToProps = (state) => {
  return {
      course:state.course
  }
};

const mapDispatchToProps = (dispatch) =>{
  return {
    onLoadCourse:(id)=>{
      dispatch(fetchCourseById(id))
    }

  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(radium(CourseDes));
