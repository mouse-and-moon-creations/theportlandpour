import blogConstants from 'constants/blogConstants';

console.log(blogConstants);

const initialState = {
  meta: {
    pagination: {
      limit: 15,
      next: 0,
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
      return Object.assign({}, state, initialState, action.posts);
    case blogConstants.WAITING:
      return Object.assign({}, state, {
        waiting: true
      });
    default:
      return state;
  }

}

export default blog;
