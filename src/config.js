const config = {
  blog: {
    host: 'https://blog.theportlandpour.com',
    www: 'https://www.theportlandpour.com',
    title: 'The Portland Pour',
    longTitle: 'Cocktail recipes, local ingredients',
    description: 'Cocktail recipes with local ingredients.',
    descriptionSuffix: 'A collection of classic and modern cocktail recipes using the craft spirits and ingredients of Portland, Oregon.',
    api: {
      path: 'ghost/api/v2/content',
      endpoints: {
        pages: 'pages',
        postBySlug: 'posts/slug',
        posts: 'posts',
        tags: 'tags',
        users: 'authors'
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
  search: {
    api: {
      cx: '002626567065139467304:i70ufd-18es',
      path: 'https://www.googleapis.com/customsearch/v1'
    }
  },
  theme: {
    local: {
      headerPadding: '168px',
      maxWidth: '1270px',
      palette: {
        background: {
          dark: '#413628',
          light: '#816A4E'
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
        main: '#fff'
      }
    },
    props: {
      MuiWithWidth: {
        initialWidth: 'lg'
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
  },
  zapier: {
    catchHook: 'https://hooks.zapier.com/hooks/catch/45902/efpw2m/'
  }
};

export default config;
