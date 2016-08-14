import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routers/routers';
import injectTapEventPlugin from 'react-tap-event-plugin';

//load css
import './css/main.css';
import './css/normalize.css';
import 'flexboxgrid';


// Needed for onTouchTap
injectTapEventPlugin();



ReactDOM.render(
  <Router history={browserHistory} routes={routes}
   />,
  document.getElementById('app')
);
