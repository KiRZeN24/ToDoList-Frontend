import React, { useState } from "react";
import axios from "axios";


function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const csrfToken = document
      .querySelector('meta[name="csrf-token"]')
      .getAttribute("content");

    axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;
    axios.defaults.headers.common["Accept"] = "application/json";

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        email: email,
        password: password,
      });

      console.log(response.data);
      if (response.status === 200) {
        window.location.href = "/lista.js";
      }
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
