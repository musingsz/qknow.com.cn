import React, {Component} from "react";
import radium from 'radium';
import { Link } from 'react-router';
<<<<<<< HEAD
import img from '../images/test03.jpg';

=======
>>>>>>> 96d9f048b2f8c3996e3cab2c52e6b4e9bb0c59b4

const style ={
  base:{},
  item:{
    width:'100%',
    height:250,
<<<<<<< HEAD
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
//  //

=======
    backgroundColor:'rgba(0, 188, 212, 1)'
  }

}
>>>>>>> 96d9f048b2f8c3996e3cab2c52e6b4e9bb0c59b4

class CourseItem extends Component{
  render(){
    return (
      <div>
        <div style={[style.item]}>
<<<<<<< HEAD
        <Link to={`/view`}>
        <img  src={img} alt=""  style={[style.img]} />
          <div style={[style.intro]}>
            <h3 style={[style.h3]}>Linux权限管理之特殊权限</h3>
            <p style={[style.p]}>Linux中的常用权限命令！ </p>
          </div>
          <div style={[style.bottom]}>
            <span> 17743 人在学</span>
          </div>
        </Link>

=======
          <Link to={`/view`}>跳转</Link>
>>>>>>> 96d9f048b2f8c3996e3cab2c52e6b4e9bb0c59b4
        </div>
      </div>
    )
  }
};

export default radium(CourseItem)
