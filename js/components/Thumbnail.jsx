import React from 'react';

const Thumbnail = ({ user }) => {
  if (!user) return (<h3>Nothing found :(</h3>);

  return (
    <div className="thumbnail text-center">
      <img src={`./images/${user.image}.svg`} alt={user.name} />

      <div className="thumbnail-caption">
        <h3>{user.name}</h3>

        <table className="user-info table table-responsive">
          <tbody>
            <tr>
              <td>Age:</td>
              <td>{user.age}</td>
            </tr>
            <tr>
              <td>Favorite animal:</td>
              <td>{user.image}</td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td>
                <span>8 </span>
                <span>{user.phone}</span>
              </td>
            </tr>
          </tbody>
        </table>

        <p>
          <strong>Favorite phrase: </strong>
          {user.phrase}
        </p>
      </div>
    </div>
  );
};

Thumbnail.propTypes = {
  user: React.PropTypes.object.isRequired,
};

export default Thumbnail;
