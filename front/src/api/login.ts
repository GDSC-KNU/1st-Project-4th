import axios from 'axios';
import { URL } from '@/constants/url';

export const postLogin = (code: string) => {
  axios.post(
    `${URL.DOMAIN}${URL.LOGIN}`,
    { code },
    {
      headers: { 'Access-Control-Allow-Origin': '*' },
      // withCredentials: true }
    },
  );
};
