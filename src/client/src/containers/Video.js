import React, {Component} from "react";
import radium from 'radium';
import RaisedButton from 'material-ui/RaisedButton';
import Madia from '../components/Media';
import bgQknow from '../images/qknow.jpg';



const style = {
  base:{

  },
  video:{
    height:750
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
    lineHeight:1.3
  }
}


class Video extends Component{
  render(){
    return (
      <div className="container" >
        <div className="row" >
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={[style.video]}>
            <Madia src="http://qknow1.oss-cn-shanghai.aliyuncs.com/chrome_01_2016-08-29_222508.mp4" poster={bgQknow} >
            </Madia>
         </div>
        </div>
        <div className="row between-lg" style={[style.des]}>
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2" >
            <span style={[style.couseName]}>Chrome开发者完全指南</span>
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
              在Web开发者中，Google Chrome是使用最广泛的浏览器。
              如何使用Chrome来提高我们的开发速度，减少不必要的时间，正是我们开发者必须掌握的技巧。
              </span>
          </div>
        </div>
      </div>
    )
  }
};

export default radium(Video);
