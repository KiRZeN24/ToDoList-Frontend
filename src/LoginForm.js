import React, { useState } from "react";
import axios from "axios";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    // axios.defaults.withCredentials = true;
    // axios.defaults.withXSRFToken = true;
    axios.defaults.headers.common["Accept"] = "application/json";
    /*axios.defaults.headers.common["Access-Control-Allow-Credentials"] = true;*/

    const ApiAuth = axios.create({
      baseURL: "http://127.0.0.1:8000",
    });
    ApiAuth.interceptors.request.use((config) => {
      const token = decodeURIComponent(
        document.cookie.replace("XSRF-TOKEN=", "")
      );
      ApiAuth.defaults.headers["X-XSRF-TOKEN"] = token;
      return config;
    });

    try {
      await ApiAuth
        .get("http://127.0.0.1:8000/sanctum/csrf-cookie")
        .then((response) => {
          debugger;
          console.log(document.cookie);
          try {
            ApiAuth
              .post("http://127.0.0.1:8000/api/login", {
                email: email,
                password: password,
              })
              .then((response) => {
                window.location.href = "/lista.js";
              });

            /*  console.log(response.data);
            if (response.status === 200) {
              window.location.href = "/lista.js";
            }*/
          } catch (error) {
            setError("E-mail o contraseña incorrectos.");
            console.error("Error al iniciar sesión:", error);
          }
        });
    } catch (error) {
      setError("E-mail o contraseña incorrectos.");
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default LoginForm;
