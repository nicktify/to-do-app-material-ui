import {createStore} from 'react-redux';

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  
  ReactReduxDevTools
)

export default store;

