/**
 * @file About view
 * @description About page
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React, { Component } from 'react';
import ReactDomServer from 'react-dom/server';
import { connect } from 'react-redux';
import blogActions from '../../actions/blogActions';
import moment from 'moment';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {
    paddingTop: theme.local.headerPadding
  }
});

class SitemapView extends Component {

  componentDidMount = () => {

    this.props.dispatch(blogActions.getPosts({ limit: 'all', filter: '' }));

  }

  prepareSitemap = () => {

    const pageCount = Math.ceil(+this.props.blog.posts.meta.pagination.total / 16);

    let pages = [];

    if(pageCount) {
      for(var i = 1; i<=pageCount; i++) {
        pages.push(i);
      }
    }

    const { posts } = this.props.blog.posts;

    const domain = 'https://www.theportlandpour.com';
    const license = 'https://creativecommons.org/licenses/by-nc-nd/4.0';

    const namespaces = {
      "xmlns:image": "http://www.google.com/schemas/sitemap-image/1.1"
    };

    const urlset = props => React.createElement('urlset', props);
    const url = props => React.createElement('url', props);
    const loc = props => React.createElement('loc', props);
    const changefreq = props => React.createElement('changefreq', props);
    const lastmod = props => React.createElement('lastmod', props);
    const priority = props => React.createElement('priority', props);
    const ImageImage = (p: *) => {
      const { children, ...props } = p;
      return React.createElement('image:image', props, children);
    }
    const ImageLoc = (p: *) => {
      const { children, ...props } = p;
      return React.createElement('image:loc', props, children);
    }
    const ImageCaption = (p: *) => {
      const { children, ...props } = p;
      return React.createElement('image:caption', props, children);
    }
    const ImageGeo_location = (p: *) => {
      const { children, ...props } = p;
      return React.createElement('image:geo_location', props, children);
    }
    const ImageTitle = (p: *) => {
      const { children, ...props } = p;
      return React.createElement('image:title', props, children);
    }
    const ImageLicense = (p: *) => {
      const { children, ...props } = p;
      return React.createElement('image:license', props, children);
    }

    const sitemap = ReactDomServer.renderToStaticMarkup(
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" {...namespaces}>
        <url>
          <loc>{encodeURI(domain + '/')}</loc>
          <changefreq>weekly</changefreq>
          <lastmod>{moment().format('YYYY-MM-DD')}</lastmod>
          <priority>1.0</priority>
        </url>
        <url>
          <loc>{encodeURI(domain + '/about')}</loc>
          <priority>0.1</priority>
        </url>
        <url>
          <loc>{encodeURI(domain + '/contact')}</loc>
          <priority>0.1</priority>
        </url>
        <url>
          <loc>{encodeURI(domain + '/work-with-us')}</loc>
          <priority>0.1</priority>
        </url>
        {pages.map(page => {
          return (
            <url>
              <loc>{encodeURI(domain + '/page/' + page)}</loc>
              <changefreq>weekly</changefreq>
              <lastmod>{moment().format('YYYY-MM-DD')}</lastmod>
            </url>
          )
        })}
        {posts.map(post => {
          return (
            <url>
              <loc>{encodeURI(domain + '/post/' + post.slug)}</loc>
              <changefreq>weekly</changefreq>
              <priority>{post.featured ? 0.8 : 0.6}</priority>
              <lastmod>{moment(post.published_at).format('YYYY-MM-DD')}</lastmod>
              <ImageImage>
                <ImageLoc>{encodeURI(post.feature_image)}</ImageLoc>
                <ImageCaption>{post.custom_excerpt}</ImageCaption>
                <ImageTitle>{post.title}</ImageTitle>
                <ImageLicense>{encodeURI(license)}</ImageLicense>
                <ImageGeo_location>Portland, Oregon</ImageGeo_location>
              </ImageImage>
            </url>
          )
        })}
      </urlset>
    );

    return sitemap;

  }

  render() {

    const { classes } = this.props;
    const preparedSitemap = this.prepareSitemap();

    return (
      <div className={classes.root}>{preparedSitemap}</div>
    );

  }

}

const mapStateToProps = state => {

  return state;

}

const styledComponent = withStyles(styles)(SitemapView)

export default connect(mapStateToProps)(styledComponent);
