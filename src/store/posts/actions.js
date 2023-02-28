export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const FETCH_MORE_POSTS_SUCCESS = 'FETCH_MORE_POSTS_SUCCESS';
export const FETCH_MORE_POSTS_FAILURE = 'FETCH_MORE_POSTS_FAILURE';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export const fetchPosts = () => async (dispatch) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10');
    const posts = await response.json();
    dispatch({ type: FETCH_POSTS_SUCCESS, payload: posts });
  } catch (error) {
    const errorMessage = error.message;
    dispatch({ type: FETCH_POSTS_FAILURE, payload: errorMessage });
  }
};

export const fetchMorePosts = (start, limit) => async (dispatch) => {
  if (start > 90) {
    return;
  }

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`);
    const posts = await response.json();
    dispatch({ type: FETCH_MORE_POSTS_SUCCESS, payload: posts });
  } catch (error) {
    const errorMessage = error.message;
    dispatch({ type: FETCH_MORE_POSTS_FAILURE, payload: errorMessage });
  }
};

export const deleteFetchedPost = (
  post, posts, setIsError, setPosts
) => async (dispatch) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
      method: 'DELETE',
    });
    if (response.status === 200) {
      dispatch({ type: REMOVE_ITEM, payload: post.id });
      setPosts(posts.filter(p => p.id !== post.id));

      setIsError(false)
      return
    }
    setIsError(true)

  } catch (error) {
    setIsError(true)
    console.error(error)
  }
}
