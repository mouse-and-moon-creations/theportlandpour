const config = {
  blog: {
    featuredPostsCaption: 'Some of our favorite whiskey cocktails and cocktail recipes featuring some of Portland\'s local craft distilling bourbon and rye.',
    featuredPostsTitle: 'Whiskey cocktails',
    host: 'https://blog.theportlandpour.com',
    www: 'https://www.theportlandpour.com',
    title: 'The Portland Pour',
    longTitle: 'Cocktail recipes, local ingredients',
    description: 'Cocktail recipes with local ingredients.',
    descriptionSuffix: 'A collection of classic and modern cocktail recipes using the craft spirits and ingredients of Portland, Oregon.',
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
  facebook: {
    share: 'https://www.facebook.com/sharer/sharer.php?u='
  },
  googlePlus: {
    share: 'https://plus.google.com/share?url='
  },
  mailchimp: {
    joinUrl: '//inspecdigital.us10.list-manage.com/subscribe/post-json?u=2b5f5ea27c2aeb60c18ebca53&amp;id=d633c0fa8c&b_2b5f5ea27c2aeb60c18ebca53_d633c0fa8c='
  },
  pinterest: {
    share: 'https://pinterest.com/pin/create/button/'
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
  },
  twitter: {
    handle: '@PortlandPour',
    hashtags: 'cocktails,theportlandpour,booze,pdxnow,pdxdrinks,craftcocktails,portland,pdx',
    share: 'https://twitter.com/intent/tweet'
  }
};

export default config;
