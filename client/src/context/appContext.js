import React, { useContext, useReducer } from "react";
import axios from "axios";
import {
  DISPLAY_ALERT,
  HIDE_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
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
  showSidebar: false,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //axios global headers
  const authFetch = axios.create({
    baseURL: "/api/v1",
  });
  //axios interceptors

  //request
  authFetch.interceptors.request.use(
    (config) => {
      config.headers.common["Authorization"] = `Bearer ${state.token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  //response
  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.log(error.response);
      if (error.response.status === 401) {
        console.log("AUTH ERROR");
      }
      return Promise.reject(error);
    }
  );

  const addItemToLocalStorage = ({ newUser, token, location }) => {
    console.log(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
    localStorage.setItem("token", token);
    localStorage.setItem("location", location);
  };
  const removeItemFromLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("location");
  };

  //REGISTER USER
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

  //LOGIN USER
  const loginUser = async (currentUser) => {
    dispatch({ type: LOGIN_USER_BEGIN });
    try {
      const response = await axios.post("/api/v1/auth/login", currentUser);
      console.log(response);
      const { newUser, token } = response.data;
      const { location } = newUser;
      dispatch({
        type: LOGIN_USER_SUCCESS,
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
        type: LOGIN_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  //TOGGLE SIDEBAR
  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };

  //LOGOUT USER
  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
    removeItemFromLocalStorage();
  };

  //UPDATE USER
  const updateUser = async (currentUser) => {
    try {
      const { data } = await authFetch.patch("/auth/Update", currentUser);
      console.log(data);
    } catch (error) {}
  };

  //ALERTS
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
        loginUser,
        removeItemFromLocalStorage,
        toggleSidebar,
        logoutUser,
        updateUser,
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
