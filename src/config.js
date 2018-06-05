const config = {
  blog: {
    host: 'https://blog.theportlandpour.com',
    api: {
      path: 'ghost/api/v0.1',
      user: 'ghost-frontend',
      secret: 'a26d5ff404ed',
      endpoints: {
        posts: 'posts',
        tags: 'tags',
        users: 'user'
      }
    }
  },
  theme: {
    typography: {
      body1: {
        lineHeight: '1.7em'
      },
      fontSize: 16
    }
  }
};

export default config;
