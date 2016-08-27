import React, {Component} from "react";
import radium from 'radium';
import RaisedButton from 'material-ui/RaisedButton';
import CourseItem from '../components/CourseItem';

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
  render(){
    const CourseList = [1,2,3,4,5,6,7,8].map( elem => {
      return (
        <div key={elem} className="col-xs-12 col-sm-4 col-md-3 col-lg-3" style={[style.item]}>
          <CourseItem />
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

export default radium(Course);
