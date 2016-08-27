import React, {Component} from "react";
import Icon from './Icon';



const titleStyle = {
  color:'#FFF',
  fontSize:40,
  textAlign:'center',
  marginTop:80
}

const subTitleStyle = {
  color:'#FFF',
  fontSize:38,
  textAlign:'center'
}

class Jumbotron extends Component{
  render(){
    return (
      <div>
        <div style={{minHeight:190}}>
          <p style={titleStyle}>从这里开始成为优秀</p>
          <p style={subTitleStyle}>全栈工程师</p>
        </div>
        <Icon  />
      </div>
    )
  }
};

export default Jumbotron;
