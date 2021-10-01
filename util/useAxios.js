import axios from 'axios';
import useStore from 'store';

export default function useAxios() {
  const token = useStore((state) => state.auth.token);

  const Axios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API,
  });

  Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  return Axios;
}
