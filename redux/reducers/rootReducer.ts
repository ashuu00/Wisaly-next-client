import { combineReducers } from 'redux';
import { blogReducer } from './blogReducer';
import { modalReducer } from './modalReducers';
import { userReducer } from './userReducer';

export default combineReducers({
    userState: userReducer,
    blogState: blogReducer,
    modalState: modalReducer
});
