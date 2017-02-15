import React, {Component} from "react";
import radium from 'radium';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import style from './Login.css';
import { loginUser } from '../../actions/userAction'

class Login extends Component {
  constructor(props) {
    super(props)
    const redirectRoute = this.props.location.query.next || '/';
    this.state = {
      username: '',
      password: '',
      redirectTo: redirectRoute
    };
  }

  componentWillMount(){


  }

  handleUserChange(obj){
    //console.log("obj",obj);

  }

  login(){
    let username = this.refs.username.getValue();
    let pwd = this.refs.pwd.getValue();
    this.props.loginUser(username, pwd, this.state.redirectTo);
  }

  render(){
    return (
      <div className="container">
        <div className="row" style={[style.span]}>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
            <span>用户登陆</span>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <TextField floatingLabelText="请输入用户名"
              underlineStyle={{color:"#1bb1b2"}}
              ref="username"
              style={style.btn}
             />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <TextField floatingLabelText="请输入密码"
              type="password"
              ref="pwd"
              underlineStyle={{color:"#1bb1b2"}}
              onChange={this.handleUserChange.bind(this)}
              style={style.btn}
             />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <RaisedButton label="登陆"  labelStyle={{'fontWeight':'bold'}}
              backgroundColor='#1bb1b2'
              labelColor='#fff'
              onClick={this.login.bind(this)}
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
    loginUser:(username, password, redirectTo) => {
      dispatch(loginUser(username, password, redirectTo))
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(radium(Login));
