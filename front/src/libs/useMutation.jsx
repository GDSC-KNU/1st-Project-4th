import { useState } from 'react';
import axios from 'axios';

export default function useMutation(url) {
  const [state, setState] = useState({
    loading: false,
    data: undefined,
    error: undefined,
  });
  async function mutation(data) {
    setState(prev => ({ ...prev, loading: true }));

    try {
      const response = await axios.post(url, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const responseData = response.data;
      setState(prev => ({ ...prev, data: responseData }));
      return responseData;
    } catch (error) {
      setState(prev => ({ ...prev, error: error }));
      throw error;
    } finally {
      setState(prev => ({ ...prev, loading: false }));
    }
  }
  return [mutation, { ...state }];
}
