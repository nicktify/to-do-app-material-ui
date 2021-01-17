import { createStore } from 'redux';
import { NotesReducer } from './reducers/NotesReducer';

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  NotesReducer,
  ReactReduxDevTools
)

export default store;

