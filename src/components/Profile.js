import React from 'react';
import PropTypes from 'prop-types';

function Profile({ myRockets }) {
  return (
    <div>
      <table className="profileTable">
        <tbody>
          {myRockets.map((rocket) => (
            <tr key={rocket.id}>
              <td>{rocket.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

Profile.propTypes = {
  myRockets: PropTypes
    .arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])).isRequired,
};
export default Profile;
