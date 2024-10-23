// services/libroDiarioService.js
import axios from 'axios';

const API_URL = 'http://localhost:3001';

const getAsientos = () => {
  return axios.get(`${API_URL}/mostrarAsientos`);
};

const insertarAsiento = (data) => {
  return axios.post(`${API_URL}/insertarAsiento`, data);
};

export { getAsientos, insertarAsiento };
