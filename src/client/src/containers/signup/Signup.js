import React, {Component} from "react";
import radium from 'radium';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import style from './Signup.css'

class Signup extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return (
      <div className="container">
        <div className="row" style={[style.span]}>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
            <span>用户注册</span>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <TextField hintText="只允许数字、大小写字母和下划线"
              floatingLabelText="用户名"
              underlineStyle={{color:"#1bb1b2"}}
              style={style.btn}
             />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <TextField floatingLabelText="邮箱"
              hintText="example@gmail.com"
              type="password"
              underlineStyle={{color:"#1bb1b2"}}
              style={style.btn}
             />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <TextField floatingLabelText="密码"
              type="password"
              hintText="密码长度不能少于6个字符"
              underlineStyle={{color:"#1bb1b2"}}
              style={style.btn}
             />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <RaisedButton label="登陆"  labelStyle={{'fontWeight':'bold'}}
              backgroundColor='#ff5c2d'
              labelColor='#fff'
               />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
};

const mapDispatchToProps = (dispatch) =>{
  return {

  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(radium(Signup));
