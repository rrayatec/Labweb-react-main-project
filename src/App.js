import React from "react";
import StartPage from "./pages/StartPage";
import LoginPage from "./pages/LoginPage";

export default function App(props) {
  const { userActive, getDbUser, logOut, cambiar_nombre, data } =
    props.AuthFunction();

  if (userActive !== null) {
    return (
      <StartPage
        userActive={userActive}
        logOut={logOut}
        cambiar_nombre={cambiar_nombre}
        data={data}
      />
    );
  } else {
    return <LoginPage userActive={userActive} getDbUser={getDbUser} />;
  }
}
