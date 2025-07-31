import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // change this to your actual backend URL if deployed
});

export default api;
