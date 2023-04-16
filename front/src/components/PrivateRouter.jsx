import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { URL } from '../constants/url';

const PrivateRouter = ({ isAuthenticated }) => {
  useEffect(() => {
    if (!isAuthenticated) {
      alert('로그인 후 사용해주세요');
    }
  }, [isAuthenticated]);

  return isAuthenticated ? <Outlet /> : <Navigate to={URL.ENTER} replace />;
};

export default PrivateRouter;
