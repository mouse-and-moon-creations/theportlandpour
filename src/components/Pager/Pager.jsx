/**
 * @file Pager component
 * @description Places page controls on a view
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  GridList,
  GridListTile,
  IconButton,
  Typography
} from '@material-ui/core';
import {
  KeyboardArrowLeft,
  KeyboardArrowRight
} from '@material-ui/icons';
import { blogHelper } from 'helpers';

const propTypes = {
  pagination: PropTypes.object
};

const defaultProps = {
  pagination: {}
};

const styles = {
  card: {
    marginRight: '24.5%',
    marginTop: '-1.5%',
    marginBottom: '1%',
    marginLeft: '.5%'
  },
  meta: {
    lineHeight: '48px'
  },
  next: {
    textAlign: 'right'
  }
};

const Pager = props => {

  const { classes, pagination } = props;
  const prevUrl = pagination.prev ? blogHelper.getUrl(pagination.prev) : null;
  const nextUrl = pagination.next ? blogHelper.getUrl(pagination.next) : null;

  return (
    <Card className={classes.card} elevation={0}>
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
