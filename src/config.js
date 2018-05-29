const config = {
  blog: {
    api: {
      host: 'https://blog.theportlandpour.com/ghost/api/v0.1',
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
