import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Jumbotron from "../components/Jumbotron";
import Home from "../containers/Home";





//react-router 按需加载配置
const app = (location, callback) => {
  require.ensure([], require => {
    if (process.env.NODE_ENV === 'production') {
      const App    = require('../containers/App.prod').default;
      callback(null, App);
    } else {
      const App    = require('../containers/App.dev').default;
      callback(null, App);
    }
  }, 'app')
}


const course = (location, callback) => {
  require.ensure([], require => {
    const Course    = require('../containers/Course').default;
    callback(null, {adv:Jumbotron,main:Course});
  }, 'course')
}

const view = (location, callback) => {
  require.ensure([], require => {
    const CourseDes  = require('../components/CourseDes').default;
    const View    = require('../containers/View').default;
    callback(null, {adv:CourseDes,main:View});
  }, 'view')
}


const video = (location, callback) => {
  require.ensure([], require => {
    const Video    = require('../containers/Video').default;
    callback(null, {main:Video});
  }, 'video')
}


//路由控制
const routes = (
    <Route path="/" getComponent={app} >
        <IndexRoute components={{adv:Jumbotron,main:Home}}/>
        <Route path="coursetype/:courseTypeId" getComponent={course}/>
        <Route path="view/course/:courseId" getComponent={view}/>
        <Route path="video/course/:courseId/:id/next/:nid" getComponent={video}/>
    </Route>
)



export default routes;
