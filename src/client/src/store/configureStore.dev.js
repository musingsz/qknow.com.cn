import { createStore , applyMiddleware , compose  } from 'redux';
import thunkMiddleware  from 'redux-thunk';
import rootReducer from '../reducers';
import createLogger from 'redux-logger';
import DevTools from '../containers/DevTools';


export default function configureStore(initialState){
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunkMiddleware,createLogger()),
      DevTools.instrument()
    )
  );

  return store;
}
