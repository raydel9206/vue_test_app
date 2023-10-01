
import axios from 'axios';

const config = {
   // Base Url load from .env
    baseURL: import.meta.env.VITE_DEV_BASE_URL,
    timeout: 60 * 1000,
  };
  
  let $axios = axios.create(config);
  // Add header to patch 
  $axios.defaults.headers.patch['Content-Type'] = 'application/json; encode=UTF-8';
  
  export { $axios };