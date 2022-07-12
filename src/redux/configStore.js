import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rocketReducer from './rockets/rockets';
import missionReducer from './missions/missions';

const allReducers = combineReducers({
  rocketList: rocketReducer,
  missions: missionReducer,

});

const store = createStore(allReducers, applyMiddleware(thunk));

export default store;
