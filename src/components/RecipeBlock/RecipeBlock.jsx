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
import Gloss from 'components/Gloss';

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
    paddingBottom: 0,
  },
  root: {
    backgroundColor: theme.local.palette.background.dark,
    color: theme.palette.common.white
  }
});

const RecipeBlock = props => {

  const { classes } = props;

  return (
    <Card className={classes.root} elevation={0} square>
      <CardContent className={classes.cardContent}>
        <Gloss label="Make cocktails at home" />
        <Typography color="inherit" variant="headline">The recipes</Typography>
        <Typography color="inherit" paragraph>
          Have you ever wanted to try one of the local brands, then thought, what do I do with it?
          You're not alone.
          We spent alot of time collecting recipes, and finding ways to make them with as many local products as possible.
          Our recipes come from practice, we try different local spirits and adjust proportions until we find what we like, then we photograph the results in our downtown Portland studio and post the recipes for you to try.
          If you're curious about what to do with local spirits, try some of our suggestions.
          We enjoy the amazing things we can make with local ingredients, and take pride in supporting our community.
          We encourage you to join us in our adventure.
        </Typography>
      </CardContent>
    </Card>
  );

}

RecipeBlock.propTypes = propTypes;
RecipeBlock.defaultProps = defaultProps;

export default withStyles(styles)(RecipeBlock);
