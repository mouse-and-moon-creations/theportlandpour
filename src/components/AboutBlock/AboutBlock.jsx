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
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Gloss from 'components/Gloss';
import Users from 'components/Users';

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
    paddingBottom: 0,
  },
  root: {
    backgroundColor: theme.palette.grey[100],
    margin: '0 auto',
    maxWidth: theme.local.maxWidth
  }
});

const AboutBlock = props => {

  const { classes, users } = props;

  return (
    <React.Fragment>
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
      <Divider />
      <Card className={classes.root} elevation={0} square>
        <CardContent className={classes.cardContent}>
          <Gloss label="Make cocktails at home" />
          <Typography variant="headline">The recipes</Typography>
          <Typography paragraph>
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
    </React.Fragment>
  );

}

AboutBlock.propTypes = propTypes;
AboutBlock.defaultProps = defaultProps;

export default withStyles(styles)(AboutBlock);
