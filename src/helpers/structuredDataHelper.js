import blogHelper from './blogHelper';

const getArticleData = (props) => {

  const { match, post, user } = props;
  const url = blogHelper.getBaseUrl() + match.url;
  const image = blogHelper.getBaseUrl() + post.feature_image;
  const name = user ? user.name : null;
  const title = blogHelper.getTitle();
  const description = blogHelper.getPostDescription(post);

  const article = `{
    "@context": "http://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "${url}"
    },
    "headline": "${post.title}",
    "image": [
      "${image}"
     ],
    "datePublished": "${post.published_at}"",
    "dateModified": "${post.updated_at}",
    "author": {
      "@type": "Person",
      "name": "${name}""
    },
     "publisher": {
      "@type": "Organization",
      "name": "${title}",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.theportlandpour.com/assets/images/brand/tpp.brand.md.png"
      }
    },
    "description": "${description}"
  }`;

  return article;

}

const structuredDataHelper = {
  getArticleData
}

export default structuredDataHelper;