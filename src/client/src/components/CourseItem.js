import React, {Component} from "react";
import radium from 'radium';

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
        </div>
      </div>
    )
  }
};

export default radium(CourseItem)
