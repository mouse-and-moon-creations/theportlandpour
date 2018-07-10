/**
 * @file User component
 * @description User profile card
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React from 'react';
import PropTypes from 'prop-types';
import { User } from 'components';
import { blogHelper } from 'helpers';

const propTypes = {
  compact: PropTypes.bool,
  users: PropTypes.array
};

const defaultProps = {
  compact: false,
  users: []
};

const Users = props => {

  const { compact, users } = props;

  return (
    <React.Fragment>
      {users.map(user => {
        return (<User bio={user.bio} compact={compact} key={user.id} name={user.name} src={user.profile_image} />);
      })}
    </React.Fragment>
  );

}

Users.propTypes = propTypes;
Users.defaultProps = defaultProps;

export default Users;
