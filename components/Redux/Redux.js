import React from "react";
import Login from "./Login";
import Profile from "./Profile";
import ChangeColor from "./ChangeColor";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "./features/user";
import themeReducer from "./features/theme";

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
  },
});

const Redux = () => {
  return (
    <Provider store={store}>
      <div style={{ textAlign: "center" }}>
        <Profile />
        <Login />
        <ChangeColor />
      </div>
    </Provider>
  );
};

export default Redux;
