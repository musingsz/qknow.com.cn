import React, {Component} from "react";
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';
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

  render(){
    const { user } = this.props;

    const userInfo  = (user.get("isAuthenticated")  ? (
      <FlatButton
        label = {user.get("userName")}
        style={style.btn}
      />
    ):(
      <div>
        <RaisedButton label="登陆"
       labelStyle={{'fontWeight':'bold',color:'#fff'}}
       style={style.btn}
       primary={true}
       containerElement={
         <Link  to={`/user/login`}>
         </Link>
       }
       />
       <RaisedButton label="加入我们" onTouchTap={this.handleLogin} labelStyle={{'fontWeight':'bold'}}

                   backgroundColor='#ff5c2d'
                   labelColor='#fff'
                   containerElement={
                     <Link  to={`/user/signup`}>
                     </Link>
                   }
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

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(radium(Top))
