/**
 * @file Pager component
 * @description Places page controls on a view
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';
import withStyles from '@material-ui/core/styles/withStyles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import blogHelper from '../../helpers/blogHelper';

const propTypes = {
  next: PropTypes.number,
  path: PropTypes.string,
  page: PropTypes.number,
  pages: PropTypes.number,
  prev: PropTypes.number
};

const defaultProps = {
  next: null,
  path: '/page/',
  prev: null
};

const styles = theme => ({
  card: {
    margin: '12px 0',
  },
  link : {
    display: 'inline-block',
    margin: '0 24px'
  },
  meta: {
    lineHeight: '48px'
  }
});

const Pager = props => {

  const { classes, next, page, pages, path, prev } = props;
  const prevUrl = prev ? blogHelper.getUrl(prev, path) : null;
  const nextUrl = next ? blogHelper.getUrl(next, path) : null;

  return (
    <div className={classes.card}>
      <Typography className={classes.meta} align="center" variant="caption">
        {prevUrl ? <Link to={prevUrl}><IconButton className={classes.link}><KeyboardArrowLeft/></IconButton></Link> : <IconButton className={classes.link} disabled={true}><KeyboardArrowLeft/></IconButton>}
        Page {page} of {pages}
        {nextUrl ? <Link to={nextUrl}><IconButton className={classes.link}><KeyboardArrowRight/></IconButton></Link> : <IconButton className={classes.link} disabled={true}><KeyboardArrowRight/></IconButton>}
      </Typography>
    </div>
  );

}

Pager.propTypes = propTypes;
Pager.defaultProps = defaultProps;

export default withStyles(styles)(Pager);
