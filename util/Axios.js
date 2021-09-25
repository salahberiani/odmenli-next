import axios from 'axios';

const Axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
});

// Alter defaults after Axios has been created
let token;
if (process.browser) {
  token = JSON.parse(localStorage.getItem('zu')).state.auth.token;
}

Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export default Axios;
