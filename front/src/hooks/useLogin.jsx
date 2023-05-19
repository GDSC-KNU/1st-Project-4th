import { useEffect } from 'react';
import useSWR from 'swr';
import { useNavigate } from 'react-router-dom';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import { accessTokenState } from '@/store/userState';
import useMutation from '@/hooks/useMutation';
import { URL } from '@/constants/url';
import { VITE_HOME_URL } from '@/constants/apiUrl';

export const useLogin = () => {
  const navigate = useNavigate();

  const [token, setToken] = useRecoilState(accessTokenState);

  const [onGoogleLoginSuccess, { loading, data, error }] = useMutation(
    `${VITE_HOME_URL}/api/auth/login`,
  );

  const loginHandler = async credentialResponse => {
    try {
      const code = await credentialResponse;
      // console.log(credentialResponse);
      try {
        const userResponse = await onGoogleLoginSuccess(
          { code },
          `?code=${code.clientId}`,
        );
        console.log(userResponse);
        // localStorage.setItem('user_token', userResponse);
        setToken(userResponse);
        // navigate(URL.HOME);
        // location.reload();
      } catch (error) {
        throw new Error('login failed: server');
      }
    } catch (error) {
      throw new Error('login failed: server');
      // handle your error here
    } finally {
    }
  };
  return loginHandler;
};
