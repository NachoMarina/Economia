// services/situacionPatrimonialService.js
import axios from 'axios';

const API_URL = 'http://localhost:3001';

const getSituacionPatrimonial = () => {
  return axios.get(`${API_URL}/situacionPatrimonial`);
};

export { getSituacionPatrimonial };
