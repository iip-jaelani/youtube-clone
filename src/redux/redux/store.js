import { createStore, combineReducers, applyMiddleware } from "redux";
import { promise, logger } from './middleware';
//reducers
import { video } from '../reducers/apiYoutube';
import { user } from '../reducers/users';
// import { promise } from "redux-promise-middleware";


const reducers = combineReducers({
  video,
  user
})


const store = createStore(reducers, applyMiddleware(promise, logger))

export default store;