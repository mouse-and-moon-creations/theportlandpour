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
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import blogHelper from 'helpers/blogHelper';

const propTypes = {
  pagination: PropTypes.object
};

const defaultProps = {
  pagination: {}
};

const styles = theme => ({
  card: {
    backgroundColor: theme.palette.grey[100],
    marginBottom: '24px',
    [theme.breakpoints.down('sm')]: {
      margin: 'auto auto 1% auto',
      width: '98%'
    }
  },
  meta: {
    lineHeight: '48px'
  },
  next: {
    textAlign: 'right'
  }
});

const Pager = props => {

  const { classes, pagination } = props;
  const prevUrl = pagination.prev ? blogHelper.getUrl(pagination.prev) : null;
  const nextUrl = pagination.next ? blogHelper.getUrl(pagination.next) : null;

  return (
    <Card className={classes.card} elevation={0} square>
      <CardContent>
        <GridList cols={3} cellHeight="auto">
          <GridListTile>
            {prevUrl ? <Link to={prevUrl}><IconButton><KeyboardArrowLeft/></IconButton></Link> : <IconButton disabled={true}><KeyboardArrowLeft/></IconButton>}
          </GridListTile>
          <GridListTile>
            <Typography className={classes.meta} align="center" variant="caption">Page {pagination.page} of {pagination.pages}</Typography>
          </GridListTile>
          <GridListTile className={classes.next}>
            {nextUrl ? <Link to={nextUrl}><IconButton><KeyboardArrowRight/></IconButton></Link> : <IconButton disabled={true}><KeyboardArrowRight/></IconButton>}
          </GridListTile>
        </GridList>
      </CardContent>
    </Card>
  );

}

Pager.propTypes = propTypes;
Pager.defaultProps = defaultProps;

export default withStyles(styles)(Pager);
