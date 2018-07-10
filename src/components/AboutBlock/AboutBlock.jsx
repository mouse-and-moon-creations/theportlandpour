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
import { blogHelper } from 'helpers';

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
        <div className={classes.cards}>
          <Card className={classes.card} elevation={0}>
            <CardContent>
              <Typography variant="headline">The pictures</Typography>
              <Typography paragraph>
                We believe a well made cocktail is, itself, a work of art.
                As working artists ourselves, we appreciate the elegance and effort it takes to create something both beautiful, and delicious.
                It inspires us to create our pictures of these creations, which, by the way, we craft ourselves in our downtown Portland studio.
                After trying them for ourselves, of course.
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.card} elevation={0}>
            <CardContent>
              <Typography variant="headline">The recipes</Typography>
                <Typography paragraph>
                  The craft spirits made in Portland are fantastic.
                  We all have our favorites, and decided we should write about the cocktails we photograph, and share the recipes, but only if made with local spirits.
                  We enjoy the amazing things we can make with local ingredients, and take pride in supporting our local community, which is why we share these recipes along with our art.
                </Typography>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );

}

AboutBlock.propTypes = propTypes;
AboutBlock.defaultProps = defaultProps;

export default withStyles(styles)(AboutBlock);
