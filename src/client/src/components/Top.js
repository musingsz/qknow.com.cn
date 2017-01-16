import React, {Component} from "react";
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
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
          <FlatButton label="登陆" labelStyle={{'fontWeight':'bold',color:'#fff'}}   style={style.btn} />
          <RaisedButton label="加入我们" onTouchTap={this.handleLogin} labelStyle={{'fontWeight':'bold'}}
            backgroundColor='#ff5c2d'
            labelColor='#fff'
            style={style.btn} />
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
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
