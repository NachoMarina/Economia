import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from '../src/components/layouts/AdminLayout';
import CuentasAdministration from './modules/cuentas/CuentasAdministration';
import Asientos from './modules/asientos/Asientos';
import Estados from './modules/estados/Estados';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/cuentas" />} />
        <Route path="/" element={<AdminLayout />}>
          <Route path="cuentas" element={<CuentasAdministration />} />
          <Route path="asientos" element={<Asientos />} />
          <Route path="estados" element={<Estados />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

