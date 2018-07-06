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
  messaging: {
    error: {},
    message: null
  },
  post: {},
  posts: [],
  users: [],
  waiting: false
};

const blog = (state = initialState, action) => {

  switch(action.type) {

    case blogConstants.CLEAR_MESSAGING:

      return Object.assign(
        {},
        state,
        { messaging: initialState.messaging }
      );

    case blogConstants.CLEAR_POST_DETAIL:

      return Object.assign(
        {},
        state,
        { post: {} }
      );

    case blogConstants.ERROR:

      return Object.assign(
        {},
        state,
        {
          messaging: {
            error: true,
            message: action.error.msg
          }
        }
      );

    case blogConstants.GET_POST:

      return Object.assign(
        {},
        state,
        {
          post: action.data,
          messaging: initialState.messaging,
          meta: initialState.meta,
          waiting: false
        }
      );

    case blogConstants.GET_POSTS:

      return Object.assign(
        {},
        state,
        {
          posts: initialState.posts,
          messaging: initialState.messaging,
          meta: initialState.meta,
          waiting: false
        },
        action.data
      );

    case blogConstants.GET_USERS:

      return Object.assign(
        {},
        state,
        {
          messaging: initialState.messaging,
          users: action.data,
          waiting: false
        }
      );

    case blogConstants.MAILCHIMP:

      return Object.assign(
        {},
        state,
        {
          mailchimp: true,
          messaging: {
            message: action.data.msg,
            error: false
          },
          waiting: false
        }
      );

    case blogConstants.WAITING_MAILCHIMP:

      return Object.assign(
        {},
        state,
        {
          messaging: initialState.messaging,
          waiting: true
        }
      );

    case blogConstants.WAITING_POSTS:

      state.meta.pagination.total = initialState.meta.pagination.total;

      return Object.assign(
        {},
        state,
        {
          messaging: initialState.messaging,
          posts: initialState.posts,
          waiting: true
        }
      );

    case blogConstants.WAITING_USERS:

      return Object.assign(
        {},
        state,
        {
          messaging: initialState.messaging,
          waiting: true
        }
      );

    default:

      return state;

  }

}

export default blog;
