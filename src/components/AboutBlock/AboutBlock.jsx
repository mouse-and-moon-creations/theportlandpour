/**
 * @file AboutBlock component
 * @description Row of about cards, used on homepage
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {
  Gloss,
  Users
} from 'components';

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
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      flexWrap: 'wrap',
      justifyContent: 'flex-start'
    }
  },
  cardContent: {
    paddingBottom: 0,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: '60px',
      paddingRight: '60px'
    }
  },
  root: {

  }
});

const AboutBlock = props => {

  const { classes, users } = props;

  return (
    <Card className={classes.root} elevation={0} square>
      <CardContent className={classes.cardContent}>
        <Gloss label="About The Portland Pour" />
        <Card elevation={0}>
          <CardContent>
            <Typography variant="headline">The people</Typography>
            <div className={classes.cards}>
              <Users users={users} />
            </div>
          </CardContent>
        </Card>
        <Card elevation={0}>
          <CardContent>
            <Typography variant="headline">The recipes</Typography>
            <Typography paragraph>
              Have you ever wanted to try one of the local brands, then thought, what do I do with it?
              You're not alone.
              We spent alot of time collecting recipes, and finding ways to make them with as many local products as possible.
              Our recipes come from practice, we try different local spirits and proportions until we find what we like, then we photograph it in our downtown Portland studio, and post the recipes for you to try.
              If you're curious about what to do with local spirits, try some of our suggestions.
              We enjoy the amazing things we can make with local ingredients, and take pride in supporting our community.
              We encourage you to join us in our adventure.
            </Typography>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );

}

AboutBlock.propTypes = propTypes;
AboutBlock.defaultProps = defaultProps;

export default withStyles(styles)(AboutBlock);
