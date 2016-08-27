import React, {Component} from "react";
import radium from 'radium';
import RaisedButton from 'material-ui/RaisedButton';
import {  Link } from 'react-router'
<<<<<<< HEAD
import toolImg from '../images/skill-tools-and-workflow01.jpg';
=======

>>>>>>> 96d9f048b2f8c3996e3cab2c52e6b4e9bb0c59b4

const style ={
  base:{
    color:'BLACK'
  },
  span:{
    fontSize:30,
    textAlign:'center'
  },
  category:{
    marginTop:60
  },
  categorySecond:{
    marginTop:20
  },
  one:{
    height:270,
    backgroundColor:'rgba(255, 64, 155, 1)',
    margin:'0 10px 5px 0',
    width:'100%'
  },
  two:{
    height:270,
    backgroundColor:'rgba(156, 39, 176, 1)',
    margin:'0 10px 5px 0',
    width:'100%'
  },
  three:{
    height:270,
    backgroundColor:'rgba(0, 188, 212, 1)',
    width:'100%'
  },
  four:{
    height:270,
    backgroundColor:'rgba(255, 223, 37, 1)',
    margin:'0 10px 5px 0',
    width:'100%'
  },
  five:{
    height:270,
    backgroundColor:'rgba(59, 59, 158, 1)',
    margin:'0 10px 5px 0',
    width:'100%'
  },
  six:{
    height:270,
    backgroundColor:'rgba(29, 233, 182, 1)',
    width:'100%'
  },
  center:{
    textAlign:'center'
  },
  btnStyle:{
    margin:12,
    width:320,
    height:75,
    marginTop:20
  },
  btnLabelStyle:{
    fontSize:28,
    color:'#fff',
    fontWeight:'blod'
  }
}

<<<<<<< HEAD
const styleR={
  base:{},
  img:{
    width:'100%',
    height:'100%'
  }
}
=======
>>>>>>> 96d9f048b2f8c3996e3cab2c52e6b4e9bb0c59b4

class Home extends Component{
  render(){
    return (
      <div className="container" style={[style.base]}>
        <div className="row" style={[style.span]}>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
            <span>更加优秀的你，在未来等你</span>
          </div>
        </div>
        <div className="row" style={[style.category]} >
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6"  >
            <div style={[style.one]}>
<<<<<<< HEAD
              <Link to={`/course`}>web</Link>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3" >
          <div style={[style.two]} >
            <Link to={`/course`}>php</Link>
=======
              <Link to={`/course`}>跳转</Link>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3" >
          <div style={[style.two]}>
>>>>>>> 96d9f048b2f8c3996e3cab2c52e6b4e9bb0c59b4
          </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3" >
          <div style={[style.three]}>
<<<<<<< HEAD
            <Link to={`/course`}>nodejs</Link>
=======
>>>>>>> 96d9f048b2f8c3996e3cab2c52e6b4e9bb0c59b4
          </div>
          </div>
        </div>
        <div className="row" style={[style.categorySecond]} >
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3"  >
            <div style={[style.four]}>
<<<<<<< HEAD
              <Link to={`/course`}>
                <img src={toolImg} alt="" style={[styleR.img]}   />
              </Link>
=======
>>>>>>> 96d9f048b2f8c3996e3cab2c52e6b4e9bb0c59b4
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" >
          <div style={[style.five]}>
<<<<<<< HEAD
            <Link to={`/course`}>Linux</Link>
=======
>>>>>>> 96d9f048b2f8c3996e3cab2c52e6b4e9bb0c59b4
          </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3" >
          <div style={[style.six]}>
<<<<<<< HEAD
            <Link to={`/course`}>test</Link>
=======
>>>>>>> 96d9f048b2f8c3996e3cab2c52e6b4e9bb0c59b4
          </div>
          </div>
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

export default radium(Home)
