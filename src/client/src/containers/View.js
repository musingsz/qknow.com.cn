import React, {Component} from "react";
import radium from 'radium';
import { connect } from 'react-redux';
import {List, ListItem} from 'material-ui/List';
//import { fetchCourseTypes } from '../actions/courseTypeActions';
import VideoCam from 'material-ui/svg-icons/av/videocam';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import { Link } from 'react-router';
import { fetchChapterById } from '../actions/chapterAction';


const style = {
  base:{

  },
  item:{
    fontSize:14
  }
}

class View extends Component{

  //load course
  componentDidMount = () =>{
    this.props.onLoadChapterList(this.props.params.courseId);
  }
  render(){

    //递归生成列表
    const chapterArray = this.props.chapterList;

    const chapterList = chapterArray.map((elem) => {
      // body...
      const childList = elem.childVideo.map((item) => {
        return (
          <ListItem
            key={item.id}
            primaryText={item.title}
            containerElement={
              <Link  to={`/course/${item.course}/video/${item.id}/`}>
              </Link>
            }
            leftIcon={<VideoCam />}
            style={style.item}
          />
        )
      })
      return (
        <ListItem key={elem.id}
           primaryText={elem.title}
           leftIcon={<ContentInbox />}
           initiallyOpen={false}
           primaryTogglesNestedList={true}
           nestedItems={childList}
         />
      )

    });

    return (
      <div className="container">
        <div className="row">
          <div className=" col-md-offset-2 col-lg-offset-2 col-xs-12 col-sm-12 col-md-8 col-lg-8">
            <List>
              { chapterList }
            </List>
          </div>
      </div>


      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
      chapterList:state.chapter
  }
};

const mapDispatchToProps = (dispatch) =>{
  return {
    onLoadChapterList:(id)=>{
      dispatch(fetchChapterById(id))
    }

  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(radium(View));
