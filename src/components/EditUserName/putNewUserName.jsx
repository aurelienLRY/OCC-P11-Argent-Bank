import { createAsyncThunk } from "@reduxjs/toolkit";
import PropTypes from "prop-types";
const url = `${import.meta.env.VITE_BACKEND_API_URL}`;

const putNewUserName = createAsyncThunk(
  "auth/putUserName",
  async ({ newUserName, token }) => {
    const res = await fetch(`${url}/api/v1/user/profile`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName: newUserName }),
    });

    if (res.status === 200) {
      return ( newUserName)
    } else if (res.status === 400) {
      throw new Error("Invalid Fields");
    } else if (res.status === 500) {
      throw new Error("Internal Server Error");
    } else {
      throw new Error("Something went wrong");
    }
  }
);

putNewUserName.propTypes = {
  newUserName: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
};

export default putNewUserName;
