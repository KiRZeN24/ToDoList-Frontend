import React, { useState, useEffect } from "react";
import axios from "axios";

function Lista() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState({
    usuario: "",
    descripcion: "",
    estado: "",
  });

  useEffect(() => {
    // Hacer la solicitud HTTP para obtener las tareas cuando el componente se ejecuta
    axios
      .get("http://127.0.0.1:8000/api/tareas")
      .then((response) => {
        setTareas(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // El segundo argumento es un array vacío para que se ejecute solo una vez al montar el componente

  const handleModificar = (id) => {
    // Modificar la tarea con el id especificado
    console.log("Modificar tarea con id:", id);
  };

  const handleEliminar = (id) => {
    // Eliminar la tarea con el id especificado
    console.log("Eliminar tarea con id:", id);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNuevaTarea({ ...nuevaTarea, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para enviar la nueva tarea al backend
    console.log("Nueva tarea:", nuevaTarea);
  };

  return (
    <div className="w3-container">
      <h2>ToDoList</h2>
      <button>Añadir nueva tarea</button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="usuario"
          value={nuevaTarea.usuario}
          onChange={handleInputChange}
          placeholder="Usuario"
        />
        <input
          type="text"
          name="descripcion"
          value={nuevaTarea.descripcion}
          onChange={handleInputChange}
          placeholder="Descripción"
        />
        <input
          type="text"
          name="estado"
          value={nuevaTarea.estado}
          onChange={handleInputChange}
          placeholder="Estado"
        />
        <button type="submit">Crear Tarea</button>
      </form>
      <table className="w3-table-all">
        <thead>
          <tr className="w3-light-grey">
            <th>Seleccionar</th>
            <th>Usuario</th>
            <th>Tarea</th>
            <th>Creada</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tareas.map((tarea) => (
            <tr key={tarea.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{tarea.usuario}</td>
              <td>{tarea.descripcion}</td>
              <td>{tarea.created_at}</td>
              <td>{tarea.estado}</td>
              <td>
                <button onClick={() => handleModificar(tarea.id)}>
                  Modificar
                </button>
                <button onClick={() => handleEliminar(tarea.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Lista;
