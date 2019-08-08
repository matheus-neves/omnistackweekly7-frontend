import axios from 'axios';

const api = axios.create({
  baseURL: process.env.PORT ? 'https://omnistackweekly7-backend.herokuapp.com' : 'http://localhost:3333',
});

export default api;
