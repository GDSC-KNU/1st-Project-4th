import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { URL } from '@/constants/url';

const PublicRouter = ({ isAuthenticated }) => {
  useEffect(() => {
    if (isAuthenticated) {
      alert('로그인 상태에서 이용할수 없는 서비스입니다');
    }
  }, []);

  return isAuthenticated ? <Navigate to={URL.HOME} replace /> : <Outlet />;
};

export default PublicRouter;
