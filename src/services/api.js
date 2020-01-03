import axios from 'axios';

export const baseURL = process.env.URL || 'http://localhost:3333';

export const api = axios.create({
  baseURL,
});
