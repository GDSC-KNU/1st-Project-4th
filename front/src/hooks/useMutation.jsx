import { useState } from 'react';
import axios from 'axios';

export default function useMutation(url) {
  const [state, setState] = useState({
    loading: false,
    data: undefined,
    error: undefined,
  });
  async function mutation(data, params) {
    setState(prev => ({ ...prev, loading: true }));
    // console.log(url)
    try {
      //for useLogin
      if (params) url = url + params;

      const response = await axios.post(url, data, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });

      const responseData = response.data;
      setState(prev => ({ ...prev, data: responseData, error: null }));
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
