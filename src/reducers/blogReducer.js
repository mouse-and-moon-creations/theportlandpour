import blogConstants from '../constants/blogConstants';

const initialState = {
  featuredPosts: [],
  features: {
    meta: {
      pagination: {
        limit: null,
        next: null,
        page: null,
        pages: null,
        prev: null,
        total: null
      }
    },
    features: []
  },
  latestPosts: [],
  mailchimp: false,
  messaging: {
    error: {},
    message: null
  },
  post: {},
  posts: {
    meta: {
      pagination: {
        limit: null,
        next: null,
        page: null,
        pages: null,
        prev: null,
        total: null
      }
    },
    posts: []
  },
  selectedMixers: [],
  selectedSpirits: [],
  tags: [],
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

    case blogConstants.GET_FEATURED_POSTS:

      return Object.assign(
        {},
        state,
        {
          featuredPosts: action.data.posts,
          messaging: initialState.messaging,
          waiting: false
        }
      );

    case blogConstants.GET_FEATURES:
      return Object.assign(
        {},
        state,
        {
          features: {
            features: action.data.posts,
            meta: action.data.meta
          },
          messaging: initialState.messaging,
          waiting: false
        }
      );

    case blogConstants.GET_LATEST_POSTS:

      return Object.assign(
        {},
        state,
        {
          latestPosts: action.data.posts,
          messaging: initialState.messaging,
          waiting: false
        }
      );

    case blogConstants.GET_POST:

      return Object.assign(
        {},
        state,
        {
          post: action.data,
          messaging: initialState.messaging,
          waiting: false
        }
      );

    case blogConstants.GET_POSTS:

      return Object.assign(
        {},
        state,
        {
          messaging: initialState.messaging,
          posts: action.data,
          waiting: false
        }
      );

    case blogConstants.GET_TAGS:

      return Object.assign(
        {},
        state,
        {
          messaging: initialState.messaging,
          tags: action.data,
          waiting: false
        }
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

    case blogConstants.SET_SELECTED_MIXERS:

      return Object.assign(
        {},
        state,
        {
          messaging: initialState.messaging,
          selectedMixers: action.data,
          waiting: false
        }
      );

    case blogConstants.SET_SELECTED_SPIRITS:

      return Object.assign(
        {},
        state,
        {
          messaging: initialState.messaging,
          selectedSpirits: action.data,
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

    case blogConstants.WAITING_FEATURES:

      state.features.meta.pagination.total = initialState.features.meta.pagination.total;

      return Object.assign(
        {},
        state,
        {
          messaging: initialState.messaging,
          posts: initialState.posts,
          waiting: true
        }
      );

    case blogConstants.WAITING_FEATURE:

      state.features.meta.pagination.total = initialState.features.meta.pagination.total;

      return Object.assign(
        {},
        state,
        {
          messaging: initialState.messaging,
          waiting: true
        }
      );

    case blogConstants.WAITING_POSTS:

      state.posts.meta.pagination.total = initialState.posts.meta.pagination.total;

      return Object.assign(
        {},
        state,
        {
          messaging: initialState.messaging,
          posts: initialState.posts,
          waiting: true
        }
      );

    case blogConstants.WAITING_POST:

      state.posts.meta.pagination.total = initialState.posts.meta.pagination.total;

      return Object.assign(
        {},
        state,
        {
          messaging: initialState.messaging,
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
