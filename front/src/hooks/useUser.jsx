import { useEffect } from 'react';
import useSWR from 'swr';
import { useNavigate } from 'react-router-dom';
import { VITE_HOME_URL } from '@/constants/apiUrl';
import axios from 'axios';

const fetcher = async (url, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axiosInstance.get(url, config);
  return response.data;
};

export default function useUser(url, accessToken, refreshToken) {
  const navigate = useNavigate();

  const { data, error } = useSWR(`${VITE_HOME_URL}/api/user`);

  useEffect(() => {
    const handleRefreshToken = async () => {
      try {
        // Make a request to the token refresh endpoint on your server
        const response = await axiosInstance.post('/refresh-token');
        const newAccessToken = response.data.accessToken;
        // Update the access token in the hook's SWR key
        // mutate(newAccessToken);
      } catch (error) {
        // Handle refresh token error
        throw new Error('refresh token not revalidated');
      }
    };

    if (error?.response?.status === 401) {
      handleRefreshToken();
    }
  }, [error, url, accessToken, refreshToken]);

  return {
    user: data,
    isLoading: !error && !data,
  };
}
