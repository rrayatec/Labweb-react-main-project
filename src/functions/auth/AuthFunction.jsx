import { useState } from "react";
import axios from "axios";

export default function AuthFunction() {
  const [userActive, setUserActive] = useState(
    window.localStorage.getItem("name")
  );
  const [data, setData] = useState([
    ["Age", "Weight"],
    [4, 5.5],
    [8, 12],
  ]);

  const baseURL = "http://localhost:5000/getUsers";

  return {
    userActive,
    data,
    getDbUser: async () => {
      var user = {
        client_name: "Ruben",
      };
      try {
        await axios.post(baseURL, user).then((response) => {
          //console.log(response.data);
          setUserActive(response.data);
          document.title = response.data;
          window.localStorage.setItem("name", response.data);
        });
      } catch (error) {
        console.log(error);
      }
    },
    logOut: async () => {
      setUserActive(null);
      window.localStorage.clear();
      document.title = "Login";
    },
    cambiar_nombre: (nombre) => {
      setUserActive(nombre);
    },
    // deleteTodo: (todoIndex) => {
    //   const newTodos = todos.filter((_, index) => index !== todoIndex);
    //   setTodos(newTodos);
    // },
  };
}
