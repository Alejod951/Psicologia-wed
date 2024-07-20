import NavBar from "./componets/NavBar/NavBar.tsx";
import HomePage from "./componets/HomePage/HomePage.tsx";
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
