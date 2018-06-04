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
  }
};

export default config;
