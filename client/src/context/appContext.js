import React, { useContext, useReducer } from "react";
import axios from "axios";
import {
  DISPLAY_ALERT,
  HIDE_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
} from "./actions";
import { reducer } from "./reducer";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");
const location = localStorage.getItem("location");
// console.log(user);

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: user ? JSON.parse(user) : null,
  token: token,
  userLocation: location ? location : "",
  jobLocation: location ? location : "",
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItemToLocalStorage = ({ newUser, token, location }) => {
    console.log(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
    localStorage.setItem("token", token);
    localStorage.setItem("location", location);
  };
  const removeItemFromLocalStorage = ({ user, token, location }) => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("location");
  };

  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const response = await axios.post("/api/v1/auth/register", currentUser);
      console.log(response);
      const { newUser, token } = response.data;
      const { location } = newUser;
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: {
          newUser,
          token,
          location,
        },
      });
      addItemToLocalStorage({ newUser, token, location });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };
  const clearAlert = () => {
    setTimeout(() => {
      hideAlert();
    }, 2000);
  };
  const hideAlert = () => {
    dispatch({ type: HIDE_ALERT });
  };

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    setTimeout(() => {
      hideAlert();
    }, 2000);
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        registerUser,
        removeItemFromLocalStorage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
