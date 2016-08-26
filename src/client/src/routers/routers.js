import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from "../containers/App";
import Jumbotron from "../components/Jumbotron";
import Home from "../containers/Home";
import Course from "../containers/Course";
import View from "../containers/View";
import Video from "../containers/Video";


//路由控制
const routes = (
    <Route path="/" component={App}>
        <IndexRoute components={{adv:Jumbotron,main:Home}}/>
        <Route path="course" components={{adv:Jumbotron,main:Course}}/>
        <Route path="view" components={{adv:Jumbotron,main:View}}/>
        <Route path="video" components={{adv:Jumbotron,main:Video}}/>
    </Route>
)

export default routes;
