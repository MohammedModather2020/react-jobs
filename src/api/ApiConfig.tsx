import axios from 'axios';

const ApiConfig = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "accept-account": import.meta.env.VITE_ACCEPT_ACCOUNT,
    "accept-company": import.meta.env.VITE_ACCEPT_COMPANY,
  },
  timeout: 1000 * 60,
  withCredentials: true,
});


export default ApiConfig;