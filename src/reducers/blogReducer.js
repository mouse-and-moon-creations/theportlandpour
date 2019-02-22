import blogConstants from '../constants/blogConstants';

const initialState = {
  featuredPosts: [],
  pages: {
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
    pages: []
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
  search: {
    q: null,
    raw: {
      searchInformation: {
        totalResults: 0
      }
    },
    slugs: []
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

    case blogConstants.CLEAR_POSTS:

      return Object.assign(
        {},
        state,
        { posts: initialState.posts }
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

    case blogConstants.GET_PAGES:
      return Object.assign(
        {},
        state,
        {
          pages: {
            pages: action.data.pages,
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

    case blogConstants.SEARCH:

      return Object.assign(
        {},
        state,
        {
          messaging: initialState.messaging,
          search: action.data,
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

    case blogConstants.WAITING_PAGES:

      state.pages.meta.pagination.total = initialState.pages.meta.pagination.total;

      return Object.assign(
        {},
        state,
        {
          messaging: initialState.messaging,
          posts: initialState.posts,
          waiting: true
        }
      );

    case blogConstants.WAITING_PAGE:

      state.pages.meta.pagination.total = initialState.pages.meta.pagination.total;

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

    case blogConstants.WAITING_SEARCH:

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
