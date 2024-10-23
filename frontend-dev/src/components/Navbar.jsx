import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Sistema Contable</h2>
      <ul>
        <li>
          <Link to="/plan-de-cuentas">Plan de Cuentas</Link>
        </li>
        <li>
          <Link to="/libro-diario">Libro Diario</Link>
        </li>
        <li>
          <Link to="/estado-de-resultados">Estado de Resultados</Link>
        </li>
        <li>
          <Link to="/situacion-patrimonial">Situación Patrimonial</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
