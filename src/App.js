import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AcercaDePotisi from "./pages/AcercaDePotosi";
import Contactanos from "./pages/Contactanos";
import Eventos from "./pages/Eventos";
import Lugares from "./pages/Luegares";
import Turismo from "./pages/Turismo";
import NotFound from "./pages/NotFound";
import MenuResposive from "./components/menu/Menu_resposive";

function App() {
  return (
    <BrowserRouter>
      <MenuResposive/>      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contactanos" element={<Contactanos />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/lugares" element={<Lugares />} />
        <Route path="/turismo" element={<Turismo />} />
        <Route path="/acercade" element={<AcercaDePotisi />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
