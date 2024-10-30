import axios from 'axios';

const API_URL = 'http://localhost:3001/api'; // Asegúrate de cambiar esta URL si es necesario.

export const getCuentas = async () => {
  try {
    const response = await axios.get(`${API_URL}/cuentas`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener el plan de cuentas', error);
  }
};

export const agregarCuenta = async (nuevaCuenta) => {
  try {
    const response = await axios.post(`${API_URL}/cuentas`, nuevaCuenta);
    return response.data;
  } catch (error) {
    console.error('Error al agregar cuenta', error);
  }
};

export const modificarCuenta = async (id, cuentaActualizada) => {
  try {
    const response = await axios.put(`${API_URL}/cuentas/${id}`, cuentaActualizada);
    return response.data;
  } catch (error) {
    console.error('Error al modificar cuenta', error);
  }
};

export const borrarCuenta = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/cuentas/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error al borrar cuenta', error);
  }
};
