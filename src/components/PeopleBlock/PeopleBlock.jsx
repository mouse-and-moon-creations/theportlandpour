/**
 * @file AboutBlock component
 * @description Row of about cards, used on homepage
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Gloss from '../Gloss';
import Users from '../Users';

const propTypes = {
  users: PropTypes.array
};

const defaultProps = {
  users: []
};

const styles = theme => ({
  card: {
    minWidth: '400px',
    [theme.breakpoints.up('md')]: {
      maxWidth: '50%'
    }
  },
  cards: {
    display: 'flex',
    justifyContent: 'space-around',
    [theme.breakpoints.down('md')]: {
      flexWrap: 'wrap',
      justifyContent: 'flex-start'
    }
  },
  cardContent: {
    margin: '0 auto',
    maxWidth: theme.local.maxWidth,
    paddingBottom: 0
  },
  root: {
    background: 'transparent',
    paddingBottom: '60px',
    paddingTop: '60px'
  }
});

const PeopleBlock = props => {

  const { classes, users } = props;

  return (
    <Card className={classes.root} elevation={0} square>
      <CardContent className={classes.cardContent}>
        <Gloss label="About The Portland Pour" />
        <Typography variant="headline">The people</Typography>
        <Typography paragraph>The Portland Pour is created by the artists and makers of Mouse and Moon Creations, an art and creative studio in downtown Portland.</Typography>
        <div className={classes.cards}>
          <Users users={users} />
        </div>
      </CardContent>
    </Card>
  );

}

PeopleBlock.propTypes = propTypes;
PeopleBlock.defaultProps = defaultProps;

export default withStyles(styles)(PeopleBlock);
