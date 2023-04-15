
import axios from 'axios';

const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL_DEV
});


export default instance;