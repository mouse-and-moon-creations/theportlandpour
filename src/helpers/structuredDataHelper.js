import blogHelper from './blogHelper';

const getArticleData = (props) => {

  const { match, post, user } = props;
  const url = blogHelper.getBaseUrl() + match.url;
  const image = blogHelper.getBaseUrl() + post.feature_image;
  const name = user ? user.name : null;
  const title = blogHelper.getTitle();

  const article = `{
    "@context": "http://schema.org",
    "@type": "Article",
    "url": "${url}",
    "dateModified": "${post.updated_at}",
    "datePublished": "${post.published_at}",
    "headline": "${post.title}",
    "thumbnailUrl": "${image}",
    "description": "${post.custom_excerpt}",
    "publisher": {
       "@type": "Organization",
       "name": "${title}",
       "logo": {
         "@type": "ImageObject",
         "url": "https://www.theportlandpour.com/assets/images/brand/tpp.brand.md.png"
       }
     },
     "author": {
       "@type": "Person",
       "name": "${name}"
     },
    "image": {
      "@type": "ImageObject",
      "url": "${image}",
      "thumbnail": {
        "@type": "ImageObject",
        "name": "${image}"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "${url}"
    }
  }`;

  return article;

}

const structuredDataHelper = {
  getArticleData
}

export default structuredDataHelper;