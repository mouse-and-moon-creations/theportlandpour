/**
 * @file Hero component
 * @description Hero
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React from 'react';
import Link from 'react-router-dom/Link';
import withStyles from '@material-ui/core/styles/withStyles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import withWidth from '@material-ui/core/withWidth';
import Gloss from 'components/Gloss';
import blogHelper from 'helpers/blogHelper';

const gridCols = {
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
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)'
  },
  hero: {
    backgroundColor: theme.local.palette.background.dark,
    color: theme.palette.common.white,
    minHeight: '400px',
    paddingTop: '90px'
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
    padding: '12px 0'
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
  right: {
    flexGrow: 1
  }
});

const Hero = props => {

  const { classes, latestPosts, width } = props;

  return (
    <div className={classes.hero}>
      <div className={classes.heroContent}>
        <Hidden mdDown>
          <div className={classes.heroHeader}>
            <Gloss label="Cocktails with local ingredients" variant="display1" />
            <Typography align="right" className={classes.right} color="inherit" variant="subheading">Proudly made in Portland, Oregon</Typography>
          </div>
        </Hidden>
        <div className={classes.recent}>
          <GridList cellHeight="auto" className={classes.gridList} cols={gridCols[width]}>
            {latestPosts.map((post, index) => {
              return (
                <GridListTile className={classes.gridListTile} key={post.id} cols={1}>
                  <Link to={blogHelper.getPostUrl(post.slug)}>
                    <img className={classes.recentImage} src={blogHelper.getAssetUrl(post.feature_image)} alt={post.title} />
                    <GridListTileBar
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

const styledComponent = withStyles(styles)(Hero);

export default withWidth()(styledComponent);
