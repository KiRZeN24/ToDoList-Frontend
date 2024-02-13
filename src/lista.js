import React from "react";

function Lista() {
  return (
    <div className="w3-container">
      <h2>ToDoList</h2>
      <button>Añadir nueva tarea</button>
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
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>Carlos</td>
            <td>Crear Hola mundo con React</td>
            <td>02/01/24</td>
            <td>Finalizada</td>
            <td>
              <button>Modificar</button>
              <button>Eliminar</button>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>Carlos</td>
            <td>Crear una tabla con React</td>
            <td>02/01/24</td>
            <td>Finalizada</td>
            <td>
              <button>Modificar</button>
              <button>Eliminar</button>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>Ruben</td>
            <td>Supervisar el proyecto</td>
            <td>02/01/24</td>
            <td>En curso</td>
            <td>
              <button>Modificar</button>
              <button>Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Lista;
