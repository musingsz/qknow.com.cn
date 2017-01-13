import React, {Component} from "react";
import radium from 'radium';
import { Link } from 'react-router';


const style ={
  base:{},
  item:{
    width:'100%',
    height:250,
    position:"relative",
    overflow:"hidden"
  },
  h3:{
    margin: 0,
    padding:" 16px 0 6px ",
    fontSize: 14,
    "maxHeight": 40,
    overflow: "hidden",
    color: "#07111b",
    "lineHeight": "21px"
  },
  p:{
    "color": "#93999f",
    "fontSize": "12px",
    "height": "40px",
    overflow: "hidden",
    "lineHeight": "20px"
  },
  img:{
    height:"50%",
    width:"100%"
  },
  intro:{
    position:"absolute",
    top: "50%",
    height: "50%",
    width: "100%"

  },
  bottom:{
    position:"absolute",
    bottom: 0,
    color: "#93999f",
   fontSize: "12px",
   lineHeight: "36px"
  }
}



class CourseItem extends Component{


  render(){
    return (
      <div>
        <div style={[style.item]}>
          <Link to={`/view/course/${this.props.id}`}>
            <img  src={this.props.image} alt=""  style={[style.img]} />
            <div style={[style.intro]}>
              <h3 style={[style.h3]}>{this.props.title}</h3>
              <p style={[style.p]}>{this.props.subTitle} </p>
            </div>
            <div style={[style.bottom]}>
              <span> {this.props.sum} 人在学</span>
            </div>
          </Link>
        </div>
      </div>
    )
  }
};

export default radium(CourseItem)
