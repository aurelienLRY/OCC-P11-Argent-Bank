import { createAsyncThunk } from "@reduxjs/toolkit";
const url = `${import.meta.env.VITE_BACKEND_API_URL}`;

/**
 * Manages the cookie based on the provided token and isChecked flag.
 * If isChecked is true, sets a cookie with the provided token and an expiration date of 30 days from now.
 * If isChecked is false, removes the cookie if it exists.
 * @param {string} token - The token to be stored in the cookie.
 * @param {boolean} isChecked - Flag indicating whether the checkbox is checked or not.
 */
function manageCookie(token, isChecked) {
  if (isChecked) {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 30); // Set expiration date to 30 days from now
    const cookieValue = `token=${token}; expires=${expirationDate.toUTCString()}; path=/`;
    document.cookie = cookieValue;
  } else {
    if (document.cookie.includes("token")) {
      const cookieValue = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      document.cookie = cookieValue;
    }
  }
}

/**
 * Makes a request to the backend API to retrieve the user's profile information.
 * @param {string} token - The user's authentication token.
 * @returns {Promise<Object>} - A promise that resolves to the user's profile data.
 * @throws {Error} - If there is an error with the request or the response status is not 200, 400, or 500.
 */
const profile = async (token) => {
  const res = await fetch(`${url}/api/v1/user/profile`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  if (res.status === 200) {
    const data = await res.json();
    return data.body;
  } else if (res.status === 400) {
    throw new Error("Invalid Fields");
  } else if (res.status === 500) {
    throw new Error("Internal Server Error");
  }
};



/**
 * Sign in by remember me.
 * @returns {Promise<Object|null>} The authentication result object containing token, profile, and status.
 */
export const singInByRememberMe = createAsyncThunk("auth/rememberMe", async () => {
  const isRemembered = document.cookie.includes("token");
  console.log("Is remember",isRemembered);
  if (isRemembered) {
    const token = document.cookie.split("=")[1];
    const user = await profile(token);
    return {
      token: token,
      profil: user,
      status: "200",
    };
  } else {
    return null;
  }
});



/**
 * Creates an async thunk for the login action.
 * @param {Object} credentials - The user's login credentials.
 * @param {string} credentials.username - The user's username or email.
 * @param {string} credentials.password - The user's password.
 * @returns {Promise<Object>} - A promise that resolves to the login response data.
 * @throws {Error} - If there is an error with the request or the response status is not 200, 400, or 500.
 */
const connect = createAsyncThunk(
  "auth/singIn",
  async ({ username, password, isChecked }) => {
    const response = await fetch(`${url}/api/v1/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: username,
        password: password,
      }),
    });
    if (response.status === 200) {
      const data = await response.json();
      const user = await profile(data.body.token);
      manageCookie(data.body.token, isChecked);
      return {
        token: data.body.token,
        profil: user,
        status: response.status,
      };
    } else if (response.status === 400) {
      throw new Error("Invalid Fields");
    } else if (response.status === 500) {
      throw new Error("Internal Server Error");
    }
  }
);

export default connect;
