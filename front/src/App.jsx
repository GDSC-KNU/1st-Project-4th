import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { getUserIsLogin } from './store/userState';

import Home from './pages/Home';
import Nav from './components/Nav';
import Enter from './pages/Enter';
import Board from './pages/Board';
import Profile from './pages/Profile';
import BoardDetail from './pages/Board/BoardDetail';

function App() {
  const isLogin = useRecoilValue(getUserIsLogin);

  console.log(isLogin);
  return (
    <div className="App">
      <Nav />
      <div className=" w-full max-w-[950px] flex flex-col items-center py-12 mx-auto">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/board" element={<Board />}></Route>
          <Route path="/board/:id" element={<BoardDetail />}></Route>
          <Route path="/enter" element={<Enter />}></Route>
          <Route path="/profile/:id" element={<Profile />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
