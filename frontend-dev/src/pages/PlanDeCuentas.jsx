import React, { useEffect, useState } from 'react';
import { getCuentas, modificarCuenta, borrarCuenta } from '../services/ServicePlanDeCuentas'; // Importamos las funciones
import '../assets/PlanDeCuentas.css';

const PlanDeCuentas = () => {
  const [cuentas, setCuentas] = useState([]); // Estado inicial como array vacío
  const [loading, setLoading] = useState(true); // Para controlar la carga
  const [error, setError] = useState(null); // Para manejar errores

  useEffect(() => {
    const fetchCuentas = async () => {
      try {
        const response = await getCuentas();
        setCuentas(response); // Guardamos las cuentas en el estado
      } catch (err) {
        setError('Hubo un error al cargar las cuentas'); // Manejo de errores
      } finally {
        setLoading(false); // Indicamos que la carga ha terminado
      }
    };
    fetchCuentas();
  }, []);

  if (loading) {
    return <div>Cargando cuentas...</div>; // Indicador de carga
  }

  if (error) {
    return <div>{error}</div>; // Mensaje de error
  }

  if (!cuentas || cuentas.length === 0) {
    return <div>No hay cuentas disponibles</div>; // Cuando no hay cuentas
  }

  return (
    <div>
      <h1>Plan de Cuentas</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cuentas.map((cuenta) => (
            <tr key={cuenta.id}>
              <td>{cuenta.id}</td>
              <td>{cuenta.nombre}</td>
              <td>
                <button onClick={() => modificarCuenta(cuenta.id)}>Modificar</button>
                <button onClick={() => borrarCuenta(cuenta.id)}>Borrar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlanDeCuentas;
