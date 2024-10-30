import React, { useEffect, useState } from 'react';
import { getAsientos } from '../services/ServiceLibroDiario';

const LibroDiarioPage = () => {
  const [asientos, setAsientos] = useState([]);

  useEffect(() => {
    // Llamada a la API para obtener los asientos
    getAsientos().then((data) => {
      setAsientos(data);
    }).catch((error) => {
      console.error('Error al obtener los asientos:', error);
    });
  }, []);

  return (
    <div>
      <h2>Libro Diario</h2>
      <table>
        <thead>
          <tr>
            <th>Nro. Asiento</th>
            <th>Fecha</th>
            <th>Código</th>
            <th>Cuenta</th>
            <th>Debe</th>
            <th>Haber</th>
          </tr>
        </thead>
        <tbody>
          {asientos.map((asiento) => (
            <tr key={asiento.id_asiento}>
              <td>{asiento.id_asiento}</td>
              <td>{asiento.fecha_asiento}</td>
              <td>{asiento.codigo}</td>
              <td>{asiento.cuenta}</td>
              <td>{asiento.importe.debe}</td>
              <td>{asiento.importe.haber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LibroDiarioPage;
