<<<<<<< HEAD
import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from "../containers/App";
import Jumbotron from "../components/Jumbotron";
import Home from "../containers/Home";

//react-router 按需加载配置
const course = (location, callback) => {
  require.ensure([], require => {
    const Course    = require('../containers/Course').default;
    callback(null, {adv:Jumbotron,main:Course});
  }, 'course')
}

const view = (location, callback) => {
  require.ensure([], require => {
    const CourseDes    = require('../components/CourseDes').default;
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
    <Route path="/" component={App}>
        <IndexRoute components={{adv:Jumbotron,main:Home}}/>
        <Route path="course" getComponent={course}/>
        <Route path="view" getComponent={view}/>
        <Route path="video" getComponent={video}/>
    </Route>
)

export default routes;
=======
import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from "../containers/App";
import Jumbotron from "../components/Jumbotron";
import Home from "../containers/Home";
//import Course from "../containers/Course";
import View from "../containers/View";
import Video from "../containers/Video";
import CourseDes from "../components/CourseDes";

const course = (location, callback) => {
  require.ensure([], require => {
    //const Jumbotron = require('../components/Jumbotron');
    const Course    = require('../containers/Course').default;
    callback(null, {adv:Jumbotron,main:Course});
  }, 'course')
}



//路由控制
const routes = (
    <Route path="/" component={App}>
        <IndexRoute components={{adv:Jumbotron,main:Home}}/>
        <Route path="course" getComponent={course}/>
        <Route path="view" components={{adv:CourseDes,main:View}}/>
        <Route path="video" components={{main:Video}}/>
    </Route>
)

export default routes;
>>>>>>> 96d9f048b2f8c3996e3cab2c52e6b4e9bb0c59b4
