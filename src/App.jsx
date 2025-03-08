//Importamos useState desde React para manejar el estado
// del nombre del profesor.

import { useState } from "react";
import "./App.css";

function App() {
  // Variables de estado
    const [name, setName] = useState("Sofía");
    const [newName, setNewName] = useState("");

  // Función para cambiar el nombre desde el formulario
    const changeName = (event) => {
    event.preventDefault();
    if (newName.trim() !== "") {
    setName(newName);
    setNewName(""); // Limpiar el input
    }
};

return (
    <div className="container">
        <h2>Teacher Name: <span className="highlight">{name}</span></h2>

      {/* Lista de nombres predefinidos */}
        <ul>
            <li onClick={() => setName("Data")}>Data</li>
            <li onClick={() => setName("Reyes")}>Reyes</li>
            <li onClick={() => setName("Yolanda")}>Yolanda</li>
        </ul>

      {/* Formulario para cambiar el nombre */}
    <form onSubmit={changeName}>
        <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Add a name"
        />
        <button type="submit">Add</button>
    </form>
    </div>
    );
}

export default App;
