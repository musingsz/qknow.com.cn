import React, {Component} from "react";
import radium from 'radium';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  base:{

  },
  video:{
<<<<<<< HEAD
    height:750
=======
    height:750,
    backgroundColor:'rgba(128, 0, 128, 1)'
>>>>>>> 96d9f048b2f8c3996e3cab2c52e6b4e9bb0c59b4
  },
  couseName:{
    fontSize:30
  },
  des:{
    marginTop:20,
    marginBottom:10
  },
  couseIntro:{
    fontSize:18,
<<<<<<< HEAD
    lineHeight:1.3
=======
    lineHeight:1.2
>>>>>>> 96d9f048b2f8c3996e3cab2c52e6b4e9bb0c59b4
  }
}


class Video extends Component{
<<<<<<< HEAD

=======
>>>>>>> 96d9f048b2f8c3996e3cab2c52e6b4e9bb0c59b4
  render(){
    return (
      <div className="container" >
        <div className="row" >
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={[style.video]}>
<<<<<<< HEAD
            <video src="http://ock31hjlx.bkt.clouddn.com/events.mp4" controls="controls"></video>
=======
>>>>>>> 96d9f048b2f8c3996e3cab2c52e6b4e9bb0c59b4

          </div>
        </div>
        <div className="row between-lg" style={[style.des]}>
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2" >
            <span style={[style.couseName]}>课程名称</span>
          </div>
          <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" >
            <div className="row end-xs" >
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <RaisedButton label="下一节" primary={true}  />
              </div>
            </div>
          </div>
        </div>
        <div className="row" >
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
              <span style={[style.couseIntro]}>
              很多同学在本地开发 Laravel 项目的时候都是有集成的环境，
              所以在面对一个需要自己搭建环境的时候就素手无策，
              本系列视频将把部署 Laravel 项目的要点统统囊括，Easy enough.
              </span>
          </div>
        </div>
      </div>
    )
  }
};

export default radium(Video);
