import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';

import { getUserIsLoggedIn } from './store/userState';

import { URL } from './constants/url';

import Home from './pages/Home';
import Nav from './components/Nav';
import Enter from './pages/Enter';
import Board from './pages/Board';
import Profile from './pages/Profile';
import BoardDetail from './pages/Board/BoardDetail';
import PrivateRouter from './components/PrivateRouter';
import PublicRouter from './components/PublicRouter';

function App() {
  const isLoggedIn = useRecoilValue(getUserIsLoggedIn);

  console.log(isLoggedIn);
  return (
    <div className="App">
      <Nav />
      <div className=" w-full max-w-[950px] flex flex-col items-center py-12 mx-auto">
        <Routes>
          <Route element={<PrivateRouter isAuthenticated={isLoggedIn} />}>
            <Route path={URL.BOARD_POST} element={<Board />}></Route>
            <Route path={URL.MYPAGE} element={<Profile />}></Route>
          </Route>
          <Route element={<PublicRouter isAuthenticated={isLoggedIn} />}>
            <Route path={URL.ENTER} element={<Enter />}></Route>
          </Route>
          <Route path={URL.HOME} element={<Home />}></Route>
          <Route path={URL.BOARD} element={<Board />}></Route>
          <Route path={URL.BOARD_DETAIL} element={<BoardDetail />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
