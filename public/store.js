import { createStore } from 'redux';
// Redux Reducers
import reducer from './reducer';
// redux-thunk
import thunkMiddleware from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;
