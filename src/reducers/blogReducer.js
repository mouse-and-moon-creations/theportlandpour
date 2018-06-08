import blogConstants from 'constants/blogConstants';

const initialState = {
  mailchimp: false,
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
  users: [],
  waiting: false
};

const blog = (state = initialState, action) => {

  switch(action.type) {
    case blogConstants.GET_POSTS:
      return Object.assign({}, state, { posts: initialState.posts, meta: initialState.meta, waiting: false }, action.data);
    case blogConstants.GET_USERS:
      return Object.assign({}, state, { users: action.data, waiting: false });
    case blogConstants.MAILCHIMP:
    console.log(action);
      return Object.assign({}, state, { mailchimp: true, waiting: false });
    case blogConstants.WAITING_MAILCHIMP:
      return Object.assign({}, state, {
        waiting: true
      });
    case blogConstants.WAITING_POSTS:
      state.meta.pagination.total = initialState.meta.pagination.total;
      return Object.assign({}, state, {
        posts: initialState.posts,
        waiting: true
      });
    case blogConstants.WAITING_USERS:
      return Object.assign({}, state, {
        waiting: true
      });
    default:
      return state;
  }

}

export default blog;
