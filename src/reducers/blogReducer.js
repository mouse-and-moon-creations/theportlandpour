import blogConstants from 'constants/blogConstants';

const initialState = {
  meta: {
    pagination: {
      limit: 15,
      next: null,
      page: 1,
      pages: null,
      prev: null,
      total: null
    }
  },
  posts: [],
  waiting: false
};

const blog = (state = initialState, action) => {

  switch(action.type) {
    case blogConstants.GET_POSTS:
      return Object.assign({}, state, initialState, action.posts, action.meta);
    case blogConstants.WAITING:
      state.meta.pagination.total = initialState.meta.pagination.total;
      return Object.assign({}, state, {
        posts: initialState.posts,
        waiting: true
      });
    default:
      return state;
  }

}

export default blog;
