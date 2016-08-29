import React, {Component} from "react";
import radium from 'radium';
import {List, ListItem} from 'material-ui/List';
import VideoCam from 'material-ui/svg-icons/av/videocam';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import { Link } from 'react-router';

const style = {
  base:{

  },
  item:{
    fontSize:14
  }
}

class View extends Component{
  render(){
    return (
      <div className="container">
        <div className="row">
          <div className=" col-md-offset-2 col-lg-offset-2 col-xs-12 col-sm-12 col-md-8 col-lg-8">
            <List>
              <ListItem
                  primaryText="第一章 Chrome开发工具"
                  leftIcon={<ContentInbox />}
                  initiallyOpen={true}
                  primaryTogglesNestedList={true}
                  nestedItems={[
                    <ListItem
                      key={1}
                      primaryText="1-1 Chrome介绍"

                      containerElement={<Link  to={`/video`}></Link>}
                      leftIcon={<VideoCam />}
                      style={style.item}
                    />
                  ]}
                />
            </List>
          </div>
      </div>


      </div>
    )
  }
};

export default radium(View);
