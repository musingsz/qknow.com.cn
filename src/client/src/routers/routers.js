import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from "../containers/App";
import Jumbotron from "../components/Jumbotron";
import Home from "../containers/Home";
import Homee from "../containers/Homee";
//路由控制

const routes = (
    <Route path="/" component={App}>
        <IndexRoute components={{adv:Jumbotron,main:Home}}/>
        <Route path="homee" components={{adv:Jumbotron,main:Homee}}/>
    </Route>
)

export default routes;
