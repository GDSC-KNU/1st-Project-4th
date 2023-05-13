import { useEffect } from 'react';
import useSWR from 'swr';
import { useNavigate } from 'react-router-dom';

import { URL } from '@/constants/url';
import useMutation from '@/libs/useMutation';

export const useLogin = () => {
  const navigate = useNavigate();

  const [onGoogleLoginSuccess, { loading, data, error }] = useMutation(
    `https://msw.com/${URL.LOGIN}`,
  );

  const loginHandler = async credentialResponse => {
    try {
      await onGoogleLoginSuccess(credentialResponse);
      localStorage.setItem('access_token', data);
    } catch (error) {
      console.log(error);
      // handle your error here
    } finally {
      navigate(URL.HOME);
    }
  };
  return loginHandler;
};
