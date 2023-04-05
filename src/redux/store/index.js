
import { createStore, applyMiddleware, compose } from "redux";
import { configureStore} from '@reduxjs/toolkit';
import thunkMiddleware from "redux-thunk";
import rootReducer from '../../redux/reducer'
const composeEnhancers = (typeof window !== "undefined" &&  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))

);

export default store;
