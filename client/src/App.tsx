import NavBar from "./componets/NavBar/NavBar.tsx";
import HomePage from "./componets/HomePage/HomePage.tsx";
import Tratamientos from "./componets/Tratamientos/Tratamientos.tsx"
import { Routes, Route } from "react-router-dom";
import './App.css';
import AgendarCitas from "./componets/AgendarCitas/AgendarCitas.tsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Tratamientos />} />
        <Route path="/tratamientos" element={<Tratamientos />} />
        <Route path="/agendar" element={<AgendarCitas />} />
        <Route path="/contactanos" element={<AgendarCitas />} />
      </Routes>
    </div>
  );
}

export default App;
