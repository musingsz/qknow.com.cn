import React, {Component} from "react";
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';
import { logoutAndRedirect } from '../actions/userAction'
import { browserHistory } from 'react-router';
import logo from '../images/logo.png';
import Search from './Search';
import style from './top/top.css'
import radium from 'radium';





class Top extends Component{
  constructor(props){
    super(props);
    this.handleLogin = this.handleLogin.bind();

  }

  handleLogin=() => {

  }

  /*
  退出
   */
  handleLogout(events, value){
    if(value === 1) {
      this.props.logoutAndRedirect();
    }
  }

  handleJoin(){

    if(this.props.location.pathname !== "/user/signup"){
      browserHistory.push("/user/signup");
    }

  }

  render(){

    const { user } = this.props;

    const userInfo  = (user.get("isAuthenticated")  ? (
        <div>
          <Avatar src="https://avatars0.githubusercontent.com/u/8409001?v=3&s=460" />
          <DropDownMenu value={1} onChange={this.handleLogout.bind(this)}>
            <MenuItem value={1} primaryText={user.get("userName")} />
            <MenuItem value={2} primaryText="退出" />
          </DropDownMenu>
        </div>
    ):(
      <div>
        <RaisedButton label="登陆"
       labelStyle={{'fontWeight':'bold',color:'#fff'}}
       style={style.btn}
       primary={true}
       containerElement={
         <Link  to={`/user/login?next=${this.props.location.pathname}`}>
         </Link>
       }
       />
       <RaisedButton label="加入我们"  labelStyle={{'fontWeight':'bold'}}
                   backgroundColor='#ff5c2d'
                   labelColor='#fff'
                   onTouchTap={this.handleJoin.bind(this)}
                  //  containerElement={
                  //    <Link  to={`/user/signup`}>
                  //    </Link>
                  //  }
                   style={style.btn} />
    </div>

    ));
    return (
      <div className="row top">
        <div className=" col-xs-5 col-sm-4 col-md-2 col-lg-2">
          <a href='/'>
            <img src={logo} alt='' width="80px" height="60px" />
          </a>
        </div>
        <div style={[style.search]} className="col-xs-12 col-sm-4 col-md-6 col-lg-8">
          <div className="row end-xs">
              <div className="col-xs-8 col-sm-12 col-md-8 col-lg-8">
                <Search />
              </div>
          </div>

        </div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-2 end-xs">
            {userInfo}
        </div>
      </div>
    )
  }
};

Top.childContextTypes = {
    location: React.PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutAndRedirect: () => {
      dispatch(logoutAndRedirect())
    }
  }
}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(radium(Top))
