
import axios from 'axios';

const config = {
    baseURL: import.meta.env.VITE_DEV_BASE_URL,
    timeout: 60 * 1000,
  };
  
  let $axios = axios.create(config);
  $axios.defaults.headers.post['Content-Type'] = 'application/json; encode=UTF-8';
  
  export { $axios };