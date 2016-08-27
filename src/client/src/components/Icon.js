import React, {Component} from "react";
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';



class Icon extends Component{
  render(){
    return (
      <div>
        <Avatar icon={<FontIcon className="fa fa-angle-down"
          style={{color:'rgb(7, 64, 90)',textAlign:'center'}}  />}
          size={60}
          backgroundColor='#fff'
          style={{border: '1px solid rgb(224, 188, 188)',position: 'absolute',top: 320}}
            />
      </div>
    )
  }
};

export default Icon
