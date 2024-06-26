import { resetNotesState } from "../../feature/Notes/notesReducer";
import {
  createUserFailure,
  createUserStart,
  createUserSuccess,
  loginUserFailure,
  loginUserSuccess,
  loginUserStart,
  logoutUserStart,
  logoutUserSuccess,
  logoutUserFailure,
  loadUserStart,
  loadUserSuccess,
  loadUserFailure,
} from "../../feature/User/userReducer";
import axios from "axios";

export const createUser = (formData) => async (dispatch) => {
  try {
    console.log("formdata in action: ", formData);
    dispatch(createUserStart()); // Dispatch action to indicate pending state

    const formDataToSend = new FormData(); // Create a FormData object

    // Append form data fields to the FormData object
    formDataToSend.append("username", formData.username);
    formDataToSend.append("fullname", formData.fullname);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("password", formData.password);
    formDataToSend.append("avatar", formData.avatar); // Append the avatar file

    const response = await fetch(
      `${import.meta.env.VITE_SERVER}/users/register`,
      {
        method: "POST",
        body: formDataToSend,
        // JSON.stringify({
        //   username: formData.username,
        //   fullname:formData.fullname,
        //   email:formData.email,
        //   password:formData.password,
        //   avatar:formData.avatar
        // })
      }
    );
    const createdUser = await response.json();
    console.log("response data :", createdUser);
    dispatch(createUserSuccess());
    return "user created successfully"; // Return response data
  } catch (error) {
    console.error("Error adding to db:", error);
    dispatch(createUserFailure());
    throw error;
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch(loadUserStart());

    const response = await axios.post(
      `${import.meta.env.VITE_SERVER}/users/loadUser`,
      {},
      { withCredentials: true }
    );
    const userData = await response.data.userData;

    dispatch(loadUserSuccess(userData));
  } catch (error) {
    dispatch(loadUserFailure(error.message));
  }
};

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const loginUser = (email, password) => async (dispatch) => {
  try {
    console.log("email in action: ", email);
    dispatch(loginUserStart()); // Dispatch action to indicate pending state

    const formdata = {
      email: email,
      password: password,
    };
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER}/users/login`,
      formdata,
      { withCredentials: true }
    );
    console.log("BE resp", response.data.data.user);

    const accessToken = response.data.data.accessToken;
    const refreshToken = response.data.data.refreshToken;

    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    setAuthToken(accessToken);

    await dispatch(loginUserSuccess(response.data.data.user));
    return response;
  } catch (error) {
    console.error("Error logging In:", error);
    dispatch(loginUserFailure());
    throw error;
  }
};
export const logoutUser = () => async (dispatch) => {
  try {
    dispatch(logoutUserStart()); // Dispatch action to indicate pending state
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER}/users/logout`,
      {},
      { withCredentials: true }
    );
    await dispatch(logoutUserSuccess(response));
    await dispatch(resetNotesState());
    return response;
  } catch (error) {
    console.error("Error logging In:", error);
    dispatch(logoutUserFailure());
    throw error;
  }
};
