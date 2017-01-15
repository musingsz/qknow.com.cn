import React, {Component} from "react";
import radium from 'radium';

const style = {
  base:{
    height:50,
    backgroundColor:'rgba(68, 68, 68, 1)',
    color:'WHITE'
  },
  p:{
    marginTop:18,
    fontSize:12
  }
}


class Copyright extends Component{
  render(){
    return (
      <div className="row" style={[style.base]}>
        <div className="container">
          <div className="col-lg-12">
            <p style={[style.p]}>© Qknow 2017. All rights reserved. 蜀ICP备15030234号-1</p>
          </div>
        </div>
      </div>
    )
  }
};

export default radium(Copyright)
