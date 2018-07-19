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
  getPostsByTagCallback: PropTypes.func,
  selectedTags: PropTypes.array,
  showSearch: PropTypes.bool,
  tags: PropTypes.array
};

const defaultProps = {
  getPostsByTagCallback: null,
  selectedTags: [],
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
  sidebar: {
    backgroundColor: theme.palette.grey[100]
  },
  rootCompact: {
    width: 'auto'
  }
});

const Sidebar = props => {

  const { classes, getPostsByTagCallback, selectedTags, showSearch, spirits, tags } = props;

  const submitForm = fields => { return props.dispatch(blogActions.addToMailChimp(fields)); }

  return (
    <Paper className={classes.sidebar} elevation={0} square>
      { showSearch ?
        <React.Fragment>
          <Card className={classes.sidebar} elevation={0}>
            <CardContent>
              <Gloss label="Search and refine" />
              { selectedTags.length ?
                <React.Fragment>
                  <Typography variant="headline">Showing</Typography>
                  <div className={classes.chips}>
                    { selectedTags.map(selectedTag => {
                      return <Chip className={classes.chip} clickable key={selectedTag} label={find(tags, { slug: selectedTag }).name} onDelete={() => getPostsByTagCallback(selectedTag, true)} />
                    }) }
                  </div>
                </React.Fragment>  : null
              }
              <Typography variant="headline">Base spirits</Typography>
              <div className={classes.chips}>
                { spirits.map(spirit => {
                  return selectedTags.includes(spirit.slug) ? null : <Chip className={classes.chip} clickable key={spirit.slug} label={spirit.name} onClick={() => getPostsByTagCallback(spirit.slug)} />
                }) }
              </div>
            </CardContent>
          </Card>
          <Divider />
        </React.Fragment> : null
      }
      <Card className={classes.sidebar} elevation={0}>
        <CardContent>
          <Gloss label="Pictures by Tony M" />
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
      <Card className={classes.sidebar} elevation={0}>
        <CardContent>
          <Gloss label="Stay in touch" />
          <Typography variant="headline">Get the newsletter</Typography>
          <Card>
            <Form submitFormCallback={submitForm} form="hero" classes={{ submitButton: classes.submitButton, form: classes.form }} showCancel={false} buttonColor="default" submitLabel="Sign up" />
          </Card>
        </CardContent>
      </Card>
      <Divider />
      <Card className={classes.sidebar} elevation={0}>
        <CardContent>
          <Gloss label="Let's chat" />
          <Typography variant="headline">Contact us</Typography>
          <Card>
            <form action="https://formspree.io/info@theportlandpour.com" method="POST">
              <Card elevation={0}>
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
          </Card>
        </CardContent>
      </Card>
    </Paper>
  );

}

Sidebar.propTypes = propTypes;
Sidebar.defaultProps = defaultProps;

export default withStyles(styles)(Sidebar);
