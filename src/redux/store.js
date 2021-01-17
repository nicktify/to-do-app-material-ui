import { createStore } from 'redux';
import { TodoReducer } from './reducers/TodoReducer';

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  TodoReducer,
  ReactReduxDevTools
)

export default store;

