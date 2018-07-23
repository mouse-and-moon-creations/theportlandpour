/**
 * @file Post component
 * @description One post
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import LocalBar from '@material-ui/icons/LocalBar';

const propTypes = {
  url: PropTypes.string
};

const defaultProps = {
  url: '/page/1'
};

const styles = theme => ({
  button: {
    height: 'auto',
    marginTop: '50%',
    width: '60%',
    [theme.breakpoints.down('xs')]: {
      marginTop: 'auto'
    }
  },
  cardContent: {
    height: '100%'
  },
  icon: {
    height: '60%',
    width: '60%'
  },
  root: {
    marginBottom: '3%',
    textAlign: 'center',
    width: '32%',
    [theme.breakpoints.down('md')]: {
      width: '48%'
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
  },
});

const PostFiller = props => {

  const { classes, url } = props;

  return (
    <Card className={classes.root} elevation={0}>
      <Link to={url}>
        <CardContent className={classes.cardContent}>
          <IconButton className={classes.button} aria-label="Delete">
            <LocalBar className={classes.icon} />
          </IconButton>
          <Typography variant="headline">See all the cocktails</Typography>
        </CardContent>
      </Link>
    </Card>
  );

}

PostFiller.propTypes = propTypes;
PostFiller.defaultProps = defaultProps;

export default withStyles(styles)(PostFiller);
