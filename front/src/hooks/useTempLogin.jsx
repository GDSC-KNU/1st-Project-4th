import { useEffect } from 'react';
import useSWR from 'swr';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import Cookies from 'js-cookie';

import { accessTokenState } from '@/store/userState';
import useMutation from '@/hooks/useMutation';
import { URL } from '@/constants/url';
import { VITE_HOME_URL } from '@/constants/apiUrl';

export const useTempLogin = () => {
  const navigate = useNavigate();

  const [token, setToken] = useRecoilState(accessTokenState);

  //   const [onGoogleLoginSuccess, { loading, data, error }] = useMutation(
  //     // `${VITE_HOME_URL}/api/auth/login`,
  //     `${VITE_HOME_URL}/api/auth/login`,
  //   );

  const loginHandler = async credentialResponse => {
    try {
      // const userResponse = await onGoogleLoginSuccess(
      //   { code },
      //   `?code=${code.clientId}`,
      // );
      const userResponse = await axios.get(`${VITE_HOME_URL}/api/google`);

      // const { accessToken, refreshToken } = userResponse;

      // accessToken accessTokenState에 저장 및 atomEffect로 localstorag에 저장
      setToken(userResponse);
      // refresh token cookie에 저장.
      // Cookies.set('refreshToken', refreshToken, { httpOnly: true });
    } catch (error) {
      console.log(error);
      throw new Error('login failed: onGoogleLoginSuccess');
    }
  };

  return loginHandler;
};
