import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import Home from '@/pages/Home';
import Nav from '@/components/Nav';
import Enter from '@/pages/Enter';
import Board from '@/pages/Board/Index';
import Profile from '@/pages/Profile/Index';
import BoardDetail from '@/pages/Board/BoardDetail';
import PrivateRouter from '@/components/PrivateRouter';
import PublicRouter from '@/components/PublicRouter';
import BoardEdit from '@/pages/Board/Edit';
import BoardPost from '@/pages/Board/Post';
import Loading from '@/components/Loading';

import { accessTokenState } from '@/store/userState';
import { URL } from '@/constants/url';

function App() {
  const isLoggedIn = useRecoilValue(accessTokenState);

  return (
    <div>
      <Nav />
      <div className="w-full max-w-[950px] flex flex-col items-center md:mt-[48px] mt-[68px]  mx-auto">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route element={<PrivateRouter isAuthenticated={isLoggedIn} />}>
              <Route path={URL.BOARD_EDIT} element={<BoardEdit />}></Route>
              <Route path={URL.BOARD_POST} element={<BoardPost />}></Route>
              <Route path={URL.MYPAGE} element={<Profile />}></Route>
            </Route>
            <Route element={<PublicRouter isAuthenticated={isLoggedIn} />}>
              <Route path={URL.ENTER} element={<Enter />}></Route>
            </Route>
            <Route path={URL.HOME} element={<Home />}></Route>
            <Route path={URL.BOARDS} element={<Board />}></Route>
            <Route path={URL.BOARD_DETAIL} element={<BoardDetail />}></Route>
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
