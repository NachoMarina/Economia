// src/services/cuentasService.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const obtenerCuentas = async () => {
  try {
    const response = await axios.get(`${API_URL}/mostrarCuentas`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener cuentas:', error);
  }
};

export const agregarCuenta = async (nuevaCuenta) => {
  try {
    const response = await axios.post(`${API_URL}/agregarCuenta`, nuevaCuenta);
    return response.data;
  } catch (error) {
    console.error('Error al agregar cuenta:', error);
  }
};

// Implementar otros métodos como modificarCuenta y borrarCuenta de manera similar
