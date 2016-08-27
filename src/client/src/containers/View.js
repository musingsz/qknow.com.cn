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
                  primaryText="第一章 安装环境"
                  leftIcon={<ContentInbox />}
<<<<<<< HEAD
                  initiallyOpen={true}
=======
                  initiallyOpen={false}
>>>>>>> 96d9f048b2f8c3996e3cab2c52e6b4e9bb0c59b4
                  primaryTogglesNestedList={true}
                  nestedItems={[
                    <ListItem
                      key={1}
                      primaryText="1-1 下载文件，编辑器配置"
<<<<<<< HEAD
                      containerElement={<Link  to={`/video`}></Link>}
                      leftIcon={<VideoCam />}
                      style={style.item}
                    />

                    ,
=======
                      leftIcon={<VideoCam />}
                      style={style.item}
                      children={<Link key={"a"} to={`/video`}>跳转</Link>}
                    />,
>>>>>>> 96d9f048b2f8c3996e3cab2c52e6b4e9bb0c59b4
                    <ListItem
                      key={2}
                      primaryText="1-2 入门，编辑器配置"
                      leftIcon={<VideoCam />}
                      style={style.item}
<<<<<<< HEAD
                      containerElement={<Link  to={`/video`}></Link>}
=======
>>>>>>> 96d9f048b2f8c3996e3cab2c52e6b4e9bb0c59b4
                    />,
                    <ListItem
                      key={3}
                      primaryText="1-3 下载文件，编辑器配置"
                      leftIcon={<VideoCam />}
                      style={style.item}
<<<<<<< HEAD
                      containerElement={<Link  to={`/video`}></Link>}
=======
>>>>>>> 96d9f048b2f8c3996e3cab2c52e6b4e9bb0c59b4
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
