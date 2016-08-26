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
