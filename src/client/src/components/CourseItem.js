import React, {Component} from "react";
import radium from 'radium';
import { Link } from 'react-router';

const style ={
  base:{},
  item:{
    width:'100%',
    height:250,
    backgroundColor:'rgba(0, 188, 212, 1)'
  }

}

class CourseItem extends Component{
  render(){
    return (
      <div>
        <div style={[style.item]}>
          <Link to={`/view`}>跳转</Link>
        </div>
      </div>
    )
  }
};

export default radium(CourseItem)
