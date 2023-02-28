import { FETCH_MORE_POSTS_SUCCESS, FETCH_POSTS_SUCCESS, REMOVE_ITEM } from "./actions";

const initialState = [];

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload
      };
    case FETCH_MORE_POSTS_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, ...action.payload]
      };
    case REMOVE_ITEM:
      return {
        ...state,
        posts:  state.posts.filter(post => post.id !== action.payload),
      };
    default:
      return state;
  }
};

export default postsReducer;
