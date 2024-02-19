import { useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";

function EditUserName({ firstName, lastName, userName }) {
  const [editMode, setEditMode] = useState(false);
  const [newUserName, setNewUserName] = useState(userName);

  function editUserName(newUserName) {
    console.log("newUserName >>>>", newUserName);
  }

  if (editMode) {
    return (
      <div className="userInfo">
        <h2>Edit User info</h2>

        <div className="userInfo-input">
          <div className="inputGroupe">
            <label htmlFor="userName">User name:</label>
            <input
              type="text"
              id="userName"
              name="userName"
              placeholder="User Name"
              required
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
            />
          </div>

          <div className="inputGroupe">
          <label htmlFor="firstName">First name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            required
            value={firstName}
            disabled
          />
          </div>
          
          <div className="inputGroupe">
          <label htmlFor="lastName">Last name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            required
            value={lastName}
            disabled
          />
          </div>
        </div>
        <div className="btn-group">
          <button
            className="edit-button lg"
            onClick={() => editUserName(newUserName)}
          >
            Save
          </button>
          <button
            className="edit-button lg"
            onClick={() => setEditMode(!editMode)}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="userInfo">
        <h2>
          Welcome back <br />
          {`${firstName} ${lastName}`}!
        </h2>
        <button className="edit-button" onClick={() => setEditMode(!editMode)}>
          Edit Name
        </button>
      </div>
    );
  }
}

EditUserName.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  userName: PropTypes.string,
};

EditUserName.defaultProps = {
  userName: "",
};

export default EditUserName;
