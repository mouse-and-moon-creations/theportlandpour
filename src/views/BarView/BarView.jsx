/**
 * @file Bar view
 * @description Build a bar page
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React, { Component } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  cardMedia: {
    paddingTop: '20%'
  }
};

class BarView extends Component {

  render() {

    const { classes } = this.props;

    return (
      <React.Fragment>
        <Card elevation={0}>
          <CardContent>
            <Typography variant="headline" paragraph={true}>Getting started: Build your bar</Typography>
          </CardContent>
          <CardMedia className={classes.cardMedia} image="/assets/images/barhero.jpg" />
          <CardContent>
            <Typography variant="title" paragraph={true}>Stocking your bar with local spirits</Typography>
            <Typography paragraph={true}>
              Stocking your personal bar can be as daunting as it is enjoyable, and while it may seem overwhelming at first, a little planning and a curious outlook makes the process a tasty and rewarding one.
              We’ve put together some notes for those new to home mixology, and those who already have a bar, but want to stock it with local bottles.
            </Typography>
            <Typography paragraph={true}>
              Before you begin, it’s always helpful to have a plan.
              There are several ways to approach stocking your new bar, but we prefer a recipe based approach.
              Yes, you can get a list of the 12 most likely bottles, but that’s alot of money to spend at once, and you’re hoping you’ll use all those bottles to mix the drinks you’ll discover.
              This is a perfectly reasonable thing to do, especially if you already know what you like and, if you plan to entertain, what your guests like.
              If not, however, our plan is to pick a recipe we want to explore, buy the ingredients for that, then sidestep into other recipes that are similar, or use some of the ingredients you have. A third approach, although we recommend this only for people with specific tastes or interests, is to explore and stock a specific ingredient, such as several brands of gin, and the mixers for a short list of recipes, then taste the variety.
            </Typography>
            <Typography paragraph={true}>
              Whichever plan you choose, take notes, and stick to it.
              We highly recommend keeping a notebook of recipes, tasting notes, and purchases.
              Too often we’ve come into a bottle we loved, finished it, then forgot the brand because we didn’t write it down.
              So, get a notebook, and a sharp pencil and keep it in your purse for when the time comes to jot down a recipe, or buy a bottle of liquor.
            </Typography>
          </CardContent>
        </Card>
      </React.Fragment>
    );

  }

}

export default withStyles(styles)(BarView);
