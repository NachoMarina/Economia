import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import PlanDeCuentas from './pages/PlanDeCuentas';
import LibroDiario from './pages/LibroDiario';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/plan-de-cuentas" element={<PlanDeCuentas />} />
          <Route path="/libro-diario" element={<LibroDiario />} />
          {/* Aquí puedes añadir más rutas para otras páginas */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
