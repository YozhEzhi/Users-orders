import React from 'react';
import UserListItem from './UserListItem';

const UserList = (props) => {
  const userItems = props.users.map((user) => {
    return (
      <UserListItem
        isSelected={user === props.selectedUser ? 'info' : ''}
        onUserSelect={props.onUserSelect}
        user={user}
        key={`user-${user.name}`}
      />
    );
  });

  return (
    <div>
      <table className="user-list table table-striped">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Age</th>
            <th>Phone</th>
          </tr>
        </thead>

        <tbody>
          {userItems}
        </tbody>
      </table>
    </div>
  );
};

UserList.propTypes = {
  users: React.PropTypes.array.isRequired,
  onUserSelect: React.PropTypes.func.isRequired,
};

export default UserList;
