import { combineReducers } from 'redux';
import { counterReducer } from './counterReducer';
 
export default combineReducers({
    count: counterReducer
});