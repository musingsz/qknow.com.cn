import React, {Component} from "react";
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import Top from '../components/Top';


class Header extends Component{
  render(){
    return (
        <div className="container">
          <Top  />
          <div className="jumbotron">
            {this.props.adv}
          </div>
          <div>
            <Avatar icon={<FontIcon className="fa fa-angle-down" />}  />
          </div>
        </div>
    )
  }
};

export default Header
