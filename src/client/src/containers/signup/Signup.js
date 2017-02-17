import React, {Component} from "react";
import radium from 'radium';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import { createUser } from '../../actions/userAction'
import style from './Signup.css'

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title:"",
      open: false,
      content: ""
    };
  }
  handleCreateUser(){
    let username = this.refs.username.getValue();
    let pwd = this.refs.pwd.getValue();
    let email = this.refs.email.getValue();
    this.props.createUser(username, pwd, email);
  }
  handleClose = () => {
    this.setState({open: false});
    let { user } = this.props
    if(user.get("isCreateUser")){
      browserHistory.push("/user/login");
    }else {
      browserHistory.push("/user/signup");
    }

  };
  componentWillReceiveProps(nextProps, nextState){
    if(nextProps.user.get("isCreateUser")){
      this.setState({
        title:"注册成功",
        content: "请记住你注册的用户名和密码！",
        open: true
      });
    }else {
      this.setState({
        title:"注册失败",
        content: "请重新注册！",
        open: true
      });
    }

  }
  render(){
    const actions = [
      <RaisedButton
        label="确定"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />
    ];
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
              ref="username"
              underlineStyle={{color:"#1bb1b2"}}
              style={style.btn}
             />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <TextField floatingLabelText="邮箱"
              hintText="example@gmail.com"
              ref="email"
              underlineStyle={{color:"#1bb1b2"}}
              style={style.btn}
             />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <TextField floatingLabelText="密码"
              type="password"
              ref="pwd"
              hintText="密码长度不能少于6个字符"
              underlineStyle={{color:"#1bb1b2"}}
              style={style.btn}
             />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <RaisedButton label="注册"  labelStyle={{'fontWeight':'bold'}}
              backgroundColor='#ff5c2d'
              onTouchTap={this.handleCreateUser.bind(this)}
              labelColor='#fff'
               />
          </div>
        </div>
        <Dialog
        title={this.state.title}
        actions={actions}
        modal={false}
        open={this.state.open}
        onRequestClose={this.handleClose}
      >
        {this.state.content}
      </Dialog>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = (dispatch) =>{
  return {
      createUser:(username, password, email) => {
        dispatch(createUser(username, password, email))
      }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(radium(Signup));
