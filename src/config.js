const config = {
  blog: {
    featuredPostsCaption: 'Some of our favorite whiskey cocktails featuring some of Portland\'s local bourbon and rye.',
    featuredPostsTitle: 'Whiskey cocktails',
    host: 'https://blog.theportlandpour.com',
    www: 'https://www.theportlandpour.com',
    title: 'The Portland Pour',
    description: 'Improve your cocktail game with local products',
    descriptionSuffix: 'at The Portland Pour, a blog celebrating the local spirits and ingredients of Portland and the Pacific Northwest.',
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
    local: {
      headerPadding: '124px',
      maxWidth: '1270px',
      palette: {
        background: {
          dark: '#551400'
        }
      },
      typography: {
        gloss: {
          fontFamily: 'Italianno, cursive'
        }
      }
    },
    palette: {
      background: {
        default: '#fff'
      },
      primary: {
        main: '#706344'
      },
      secondary: {
        main: '#ef6c00'
      }
    },
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
