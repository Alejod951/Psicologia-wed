import NavBar from "./componets/NavBar/NavBar.tsx";
import HomePage from "./componets/HomePage/HomePage.tsx";
import Tratamientos from "./componets/Tratamientos/Tratamientos.tsx"
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tratamientos" element={<Tratamientos />} />
      </Routes>
    </div>
  );
}

export default App;
