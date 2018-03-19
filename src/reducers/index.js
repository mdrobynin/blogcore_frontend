import { combineReducers } from 'redux';
import { articlesReducer } from './articles';
 
export default combineReducers({
    articles: articlesReducer
});