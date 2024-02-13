import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./LoginForm";
import Lista from "./lista";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
          {/* Ruta para el formulario de inicio de sesión */}
          <Route path="/"  element={<LoginForm/>} />
          {/* Ruta para el componente Lista */}
          <Route path="/lista" element={<Lista/>} />
        </Routes>
    </Router>
  );
}

export default App;
