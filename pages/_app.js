import "../styles/globals.css";
import React from "react";
import UserContext from "../context/user/user-context";
import { userReducer } from "../context/user/user-reducer";

function MyApp({ Component, pageProps }) {
  const [userState, userDispatch] = React.useReducer(userReducer, {
    address: {
      city: "",
      street: "",
      number: "",
      zipcode: "",
    },
    email: "",
    username: "",
    name: {
      firstname: "",
      lastname: "",
    },
    phone: "",
  });

  const userProviderState = {
    userState,
    userDispatch,
  };

  return (
    <UserContext.Provider value={userProviderState}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;
