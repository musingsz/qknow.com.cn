import React, {Component} from "react";
import radium from 'radium';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const style ={
  wrap:{
    marginTop:15
  },
  image:{
    height: 180,
    width: 180,
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
  render(){
    return (
      <div className="container" style={[style.wrap]}>
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
            <Paper style={style.image} zDepth={2} />

          </div>
          <div className="col-xs-6 col-sm-6 col-md-8 col-lg-8">
            <p style={[style.title]}>课程名称</p>
            <p style={[style.subTitle]}>很多同学在本地开发 Laravel 项目的时候都是有集成的环境，
            所以在面对一个需要自己搭建环境的时候就素手无策，本系列视频将把部署 Laravel
            项目的要点统统囊括，Easy enough.</p>

             <RaisedButton label="10章节"  style={style.button} />
             <RaisedButton label="200分钟"   />

          </div>
        </div>
      </div>
    )
  }
};

export default radium(CourseDes)
