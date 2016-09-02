import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import routes from './routers/routers';
import configureStore from './store/configureStore';


import 'flexboxgrid';

//load css
import './css/main.css';
import './css/index.css';
import './css/normalize.css';
import 'colors.css';


// Needed for onTouchTap
injectTapEventPlugin();

const store = configureStore();




ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  ,document.getElementById('app')
);
