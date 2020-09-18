import { combineReducers } from 'redux';
import storiesReducer from './stories-reducer.js';
export default combineReducers({
    storiesReducer: storiesReducer,
});
