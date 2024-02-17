import { createAsyncThunk } from "@reduxjs/toolkit";

const url = `${import.meta.env.VITE_BACKEND_API_URL}/api/v1/user/profile`;

const editUserName = createAsyncThunk('edit/userName',  async (token , newUserName) => {
    const res = await fetch(url, {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        }, 
        body: JSON.stringify({username: newUserName})
    });
    if (res.status === 200) {
        const data = await res.json();
        return data.body;
    } else if (res.status === 400) {
        throw new Error("Invalid Fields");
    } else if (res.status === 500) {
        throw new Error("Internal Server Error");
    } 
}
);
export default editUserName;