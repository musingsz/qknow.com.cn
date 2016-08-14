import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from "../containers/App";
import Home from "../containers/Home";
import Homee from "../containers/Homee";
//路由控制

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={{adv:Home,main:Home}}/>
        <Route path="homee" component={{adv:Home,main:Homee}}/>
    </Route>
)

export default routes;
