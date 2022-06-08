import React, { useContext, useReducer } from "react";
import { DISPLAY_ALERT, HIDE_ALERT } from "./actions";
import { reducer } from "./reducer";
const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
    <AppContext.Provider value={{ ...state, displayAlert }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
