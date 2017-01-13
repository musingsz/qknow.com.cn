import React, {Component} from "react";
import radium from 'radium';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import CourseItem from '../components/CourseItem';
import { fetchCourseByCourseTypeId } from '../actions/courseActions';

const style = {
  base:{},
  span:{
    fontSize:30,
    textAlign:'center'
  },
  list:{
    marginTop:40
  },
  item:{
    marginTop:20
  },
  center:{
    textAlign:'center'
  },
  btnStyle:{
    margin:12,
    width:320,
    height:75,
    marginTop:20,
  },
  btnLabelStyle:{
    fontSize:28,
    color:'#fff',
    fontWeight:'blod'
  }
}

class Course extends Component{
  componentDidMount = ()=>{
    this.props.onLoadCourse(this.props.params.courseTypeId);
  }


  render(){
    const CourseList = this.props.courseList.map( elem => {
      return (
        <div key={elem}  className="col-xs-12 col-sm-4 col-md-3 col-lg-3" style={[style.item]}>
          <CourseItem id={elem.id} courseTypeId={elem.course_type_id} subTitle={ elem.sub_title } image={ elem.image } sum={ elem.statistic.sum } title={elem.title} />
        </div>
      )
      // body...
    });
    return (
        <div className="container" style={[style.base]}>
          <div className="row" style={[style.span]}>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <span>更加优秀的你，在未来等你</span>
            </div>
          </div>
          <div className="row" style={[style.list]}>
            {CourseList}
          </div>
          <div className="row" style={[style.center]}>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <RaisedButton label="加载更多 >>>" backgroundColor='rgba(72, 70, 109, 1)' labelStyle={style.btnLabelStyle}  style={style.btnStyle} />
            </div>
          </div>
        </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
      courseList:state.course
  }
};

const mapDispatchToProps = (dispatch) =>{
  return {
    onLoadCourse:(id)=>{
      dispatch(fetchCourseByCourseTypeId(id))
    }

  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(radium(Course));
