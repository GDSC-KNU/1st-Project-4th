import { useEffect } from 'react';
import useSWR from 'swr';
import { useNavigate } from 'react-router-dom';
import { VITE_HOME_URL } from '@/constants/apiUrl';

export default function useUser() {
  const navigate = useNavigate();

  const { data, error } = useSWR(`${VITE_HOME_URL}/api/user`);

  //   useEffect(() => {
  //     if (data && !data.ok) {
  //       navigate('/enter');
  //     }
  //   }, [data]);

  return {
    user: data,
    isLoading: !error && !data,
  };
}
