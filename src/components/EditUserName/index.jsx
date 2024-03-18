import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import putNewUserName from "./putNewUserName";
import "./style.scss";

const EditUserName = () => {
  const { firstName, userName, lastName } = useSelector(
    (state) => state.auth.user.profil
  );
  const { token } = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState(false);
  const [newUserName, setNewUserName] = useState(userName);

 async function  editUserName(newUserName) {
   dispatch(putNewUserName({ newUserName, token }));
   if (putNewUserName.fulfilled) {
     setEditMode(!editMode);
   } 
  }

  if (editMode) {
    return (
      <div className="userInfo">
        <h2>Edit User info</h2>

        <div className="userInfo-input">
          <div className="inputGroupe">
            <label htmlFor="userName">User name:</label>
            <input
            data-testid="input-userName"
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
};

export default EditUserName;
