/**
 * @file Logo component
 * @description Logo
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import blogActions from 'actions/blogActions';
import Gloss from 'components/Gloss';
import Form from 'components/Form';
import find from 'lodash/find';

const propTypes = {
  getPostsBySpiritCallback: PropTypes.func,
  selectedSpirits: PropTypes.array,
  showSearch: PropTypes.bool,
  tags: PropTypes.array
};

const defaultProps = {
  getPostsBySpiritCallback: null,
  selectedSpirits: [],
  showSearch: false,
  spirits: [
    { name: 'gin', slug: 'gin' },
    { name: 'rum', slug: 'rum' },
    { name: 'vermouth', slug: 'vermouth' },
    { name: 'vodka', slug: 'vodka' },
    { name: 'whiskey', slug: 'whiskey' },
  ],
  tags: []
};

const styles = theme => ({
  chip: {
    margin: '6px'
  },
  form: {
    backgroundColor: 'transparent'
  },
  sidebar: {
    backgroundColor: 'transparent'
  },
  rootCompact: {
    width: 'auto'
  }
});

const Sidebar = props => {

  console.log(props);

  const { classes, getPostsBySpiritCallback, selectedSpirits, showSearch, spirits, tags } = props;

  const submitForm = fields => { return props.dispatch(blogActions.addToMailChimp(fields)); }

  const variant = 'headline';

  return (
    <Paper className={classes.sidebar} elevation={0}>
      { showSearch ?
        <React.Fragment>
          <Card className={classes.sidebar} elevation={0} square>
            <CardContent>
              <Gloss label="Search and refine" variant={variant} />
                <Typography variant="headline">Showing</Typography>
                <Typography variant="subheading">Spirits:</Typography>
                <div className={classes.chips}>
                  { selectedSpirits.length ? selectedSpirits.map(selectedSpirit => {
                    return <Chip className={classes.chip} clickable key={selectedSpirit} label={find(tags, { slug: selectedSpirit }).name} onDelete={() => getPostsBySpiritCallback(selectedSpirit, true)} />
                  }) : <Typography>all</Typography> }
                </div>
              <Typography variant="headline">Select</Typography>
              <Typography variant="subheading">Spirits:</Typography>
              <div className={classes.chips}>
                { spirits.map(spirit => {
                  return selectedSpirits.includes(spirit.slug) ? null : <Chip className={classes.chip} clickable key={spirit.slug} label={spirit.name} onClick={() => getPostsBySpiritCallback(spirit.slug)} />
                }) }
              </div>
            </CardContent>
          </Card>
          <Divider />
        </React.Fragment> : null
      }
      <Card className={classes.sidebar} elevation={0} square>
        <CardContent>
          <Gloss label="Pictures by Tony M" variant={variant} />
          <Typography variant="headline" paragraph>About the photos</Typography>
          <Typography paragraph>
            All of the cocktail photos on The Portland Pour are by Creative Director, Tony M, published writer, artist, and photographer with over 20 years experience in advertising, publishing, technology, design and development.
          </Typography>
          <Typography paragraph>
            These photos began as an artistic series, designed for print, but have become more interesting when associated with their stories and recipes.
            We genuinely hope they may, in some small way, inspire you to try some of what Portland has to offer, and make more cocktails at home.
          </Typography>
        </CardContent>
      </Card>
      <Divider />
      <Card className={classes.sidebar} elevation={0} square>
        <CardContent>
          <Gloss label="Stay in touch" variant={variant} />
          <Typography variant="headline">Get the newsletter</Typography>
          <Form submitFormCallback={submitForm} form="hero" classes={{ submitButton: classes.submitButton, form: classes.form }} showCancel={false} buttonColor="default" submitLabel="Sign up" />
        </CardContent>
      </Card>
      <Divider />
      <Card className={classes.sidebar} elevation={0} square>
        <CardContent>
          <Gloss label="Let's chat" variant={variant} />
          <Typography variant="headline">Contact us</Typography>
          <form action="https://formspree.io/info@theportlandpour.com" method="POST">
            <Card elevation={0} className={classes.form}>
              <CardContent>
                <TextField fullWidth type="text" name="name" label="Name" />
                <TextField fullWidth type="email" name="_replyto" label="Email" />
                <TextField fullWidth multiline rows={3} name="message" label="Message" />
              </CardContent>
              <CardActions>
                <Button type="submit" variant="raised">Send</Button>
              </CardActions>
            </Card>
          </form>
        </CardContent>
      </Card>
    </Paper>
  );

}

Sidebar.propTypes = propTypes;
Sidebar.defaultProps = defaultProps;

export default withStyles(styles)(Sidebar);
