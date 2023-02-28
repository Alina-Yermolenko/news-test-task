import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import postsReducer from './posts/reducer';


const rootReducer = combineReducers({
	posts: postsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
