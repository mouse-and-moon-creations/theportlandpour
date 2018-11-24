/**
 * @file Hero component
 * @description Hero
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';
import withStyles from '@material-ui/core/styles/withStyles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Typography from '@material-ui/core/Typography';
import withWidth from '@material-ui/core/withWidth';
import Gloss from '../Gloss';
import blogHelper from '../../helpers/blogHelper';

const propTypes = {
  latestPosts: PropTypes.array
};

const defaultProps = {
  latestPosts: []
};

const gridCols = {
  xl: 4,
  lg: 4,
  md: 3.5,
  sm: 2.5,
  xs: 1.5
};

const styles = theme => ({
  button: {
    display: 'block',
    margin: 'auto'
  },
  flexGrow: {
    flexGrow: 1
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)'
  },
  hero: {
//    backgroundImage: 'url(/assets/images/winter.jpg)',
    backgroundColor: theme.local.palette.background.dark,
//    backgroundSize: 'cover',
    color: theme.palette.common.white,
    minHeight: '400px',
    paddingBottom: '24px',
    paddingTop: theme.local.headerPadding,
    [theme.breakpoints.down('md')]: {
      backgroundImage: 'none',
      paddingBottom: 0,
      paddingLeft: '12px',
    }
  },
  heroContent: {
    margin: '0 auto',
    maxWidth: theme.local.maxWidth,
    overflow: 'hidden',
    paddingLeft: '24px',
    paddingRight: '24px',
    [theme.breakpoints.down('md')]: {
      paddingLeft: 0,
      paddingRight: 0
    }
  },
  heroHeader: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    paddingBottom: '36px'
  },
  heroTagline: {
    alignItems: 'center',
    display: 'flex',
    paddingBottom: '24px'
  },
  recent: {
    display: 'flex',
  },
  recentImage: {
    height: '100%',
    width: '100%'
  },
  tileBar: {
    background: 'rgba(96,125,139,0.6)'
  }
});

const Hero = props => {

  const { classes, latestPosts, width } = props;

  return (
    <div className={classes.hero}>
      <div className={classes.heroContent}>
        <div className={classes.heroHeader}>
          <div className={classes.flexGrow}>
            <Gloss label="Craft cocktail recipes, art, and more" variant="display1" />
          </div>
          <Typography color="inherit" variant="subheading">Proudly made in Portland, Oregon</Typography>
        </div>
        <div className={classes.recent}>
          <GridList cellHeight="auto" className={classes.gridList} cols={gridCols[width]}>
            <GridListTile className={classes.gridListTile} cols={1}>
              <Link to={blogHelper.getPostUrl('2018-holiday-gift-guide')}>
                <img className={classes.recentImage} src="/assets/images/holiday-gift-guide.png" alt="2018 holiday gift guide"/>
                <GridListTileBar
                  className={classes.tileBar}
                  subtitle={<span>Best gifts for the cocktail lover</span>}
                  title={<span>*New* Holiday gift guide</span>}
                />
              </Link>
            </GridListTile>
            {latestPosts.map((post, index) => {
              return (
                <GridListTile className={classes.gridListTile} key={post.id} cols={1}>
                  <Link to={blogHelper.getPostUrl(post.slug)}>
                    <img className={classes.recentImage} src={blogHelper.getAssetUrl(post.feature_image)} alt={post.title} />
                    <GridListTileBar
                      className={classes.tileBar}
                      subtitle={<span>{post.custom_excerpt}</span>}
                      title={<span>*New* {post.title}</span>}
                    />
                  </Link>
                </GridListTile>
              );
            })}
          </GridList>
        </div>
      </div>
    </div>
  );

}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

const styledComponent = withStyles(styles)(Hero);

export default withWidth()(styledComponent);
