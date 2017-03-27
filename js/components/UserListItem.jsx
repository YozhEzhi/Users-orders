import React from 'react';

const UserListItem = ({ user, isSelected, onUserSelect }) => {
  return (
    <tr onClick={() => onUserSelect(user)} className={isSelected}>
      <td>
        <img
          src={`./images/${user.image}.svg`}
          className="user-image img-responsive"
          alt={user.name}
        />
      </td>
      <td>{user.name}</td>
      <td>{user.age}</td>
      <td>
        <span>8 </span>
        <span>{user.phone}</span>
      </td>
    </tr>
  );
};

UserListItem.propTypes = {
  isSelected: React.PropTypes.string.isRequired,
  onUserSelect: React.PropTypes.func.isRequired,
  user: React.PropTypes.object.isRequired,
};

export default UserListItem;
