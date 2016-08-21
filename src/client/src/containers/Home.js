import React, {Component} from "react";
import radium from 'radium';
import RaisedButton from 'material-ui/RaisedButton';

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


class Home extends Component{
  render(){
    return (
      <div className="container" style={[style.base]}>
        <div className="row" style={[style.span]}>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <span>更加优秀的你，在未来等你</span>
          </div>
        </div>
        <div className="row" style={[style.category]} >
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6"  >
            <div style={[style.one]}>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3" >
          <div style={[style.two]}>
          </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3" >
          <div style={[style.three]}>
          </div>
          </div>
        </div>
        <div className="row" style={[style.categorySecond]} >
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3"  >
            <div style={[style.four]}>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" >
          <div style={[style.five]}>
          </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3" >
          <div style={[style.six]}>
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
