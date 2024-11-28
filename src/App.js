import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Amazonia from "./components/Paginas/Amazonia/index.js";
import Caatinga from "./components/Paginas/Caatinga/index.js";
import Cerrado from "./components/Paginas/Cerrado/index.js";
import Pampa from "./components/Paginas/Pampa/index.js";
import Pantanal from "./components/Paginas/Pantanal/index.js";
import MataAtlantica from "./components/Paginas/Mata-Atlantica/index.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/amazonia" element={<Amazonia />} />
      <Route path="/caatinga" element={<Caatinga />} />
      <Route path="/cerrado" element={<Cerrado />} />
      <Route path="/pampa" element={<Pampa />} />
      <Route path="/pantanal" element={<Pantanal />} />
      <Route path="/mataatlantica" element={<MataAtlantica />} />
    </Routes>
  );
}

export default App;
