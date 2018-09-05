/**
 * @file User component
 * @description User profile card
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import blogHelper from 'helpers/blogHelper';

const propTypes = {
  compact: PropTypes.bool,
  bio: PropTypes.string,
  name: PropTypes.string,
  src: PropTypes.string,
  website: PropTypes.string
};

const defaultProps = {
  compact: false,
  bio: '',
  name: '',
  src: '',
  website: ''
};

const styles = theme => ({
  avatar: {
    marginRight: '12px'
  },
  bioCompact: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: '24%'
  },
  card: {
    minWidth: '240px',
    width: '24%',
    [theme.breakpoints.down('md')]: {
      marginBottom: '12px',
      width: '98%'
    }
  },
  cardContent: {
    display: 'flex',
    '& a': {
      textDecoration: 'underline'
    }
  }
});

const User = props => {

  const { bio, classes, compact, name, src, website } = props;

  const absSrc = blogHelper.getAssetUrl(src);

  return (
    <Card className={compact ? classes.cardCompact : classes.card}>
      <CardContent className={classes.cardContent}>
        <Avatar className={classes.avatar} src={absSrc} />
        <div>
          <Typography noWrap={compact} variant={compact ? 'body2' : 'title'}>{name}</Typography>
          <Typography noWrap={compact} variant="body1">{bio}</Typography>
          { website ? <Typography paragraph><a href={website} target="_blank">{website}</a></Typography> : null }
        </div>
      </CardContent>
    </Card>
  );

}

User.propTypes = propTypes;
User.defaultProps = defaultProps;

export default withStyles(styles)(User);
