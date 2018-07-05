const config = {
  blog: {
    host: 'https://blog.theportlandpour.com',
    api: {
      path: 'ghost/api/v0.1',
      user: 'ghost-frontend',
      secret: 'a26d5ff404ed',
      endpoints: {
        postBySlug: 'posts/slug',
        posts: 'posts',
        tags: 'tags',
        users: 'users'
      }
    }
  },
  mailchimp: {
    joinUrl: '//inspecdigital.us10.list-manage.com/subscribe/post-json?u=2b5f5ea27c2aeb60c18ebca53&amp;id=d633c0fa8c&b_2b5f5ea27c2aeb60c18ebca53_d633c0fa8c='
  },
  theme: {
    typography: {
      body1: {
        lineHeight: '1.7em'
      },
      display4: {
        color: '#000',
        fontFamily: 'Italianno, cursive',
        fontSize: '2rem',
        fontWeight: 400
      },
      fontSize: 16
    }
  }
};

export default config;
