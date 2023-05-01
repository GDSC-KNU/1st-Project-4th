import { Routes, Route } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { getUserIsLoggedIn } from './store/userState';

import { URL } from './constants/url';

import Home from './pages/Home';
import Nav from './components/Nav';
import Enter from './pages/Enter';
import Board from './pages/Board/Index';
import Profile from './pages/Profile';
import BoardDetail from './pages/Board/BoardDetail';
import PrivateRouter from './components/PrivateRouter';
import PublicRouter from './components/PublicRouter';
import BoardPost from './pages/Board/Post';

function App() {
  const isLoggedIn = useRecoilValue(getUserIsLoggedIn);

  return (
    <div className="App">
      <Nav />
      <div className=" w-full max-w-[950px] flex flex-col items-center py-16 mx-auto">
        <Routes>
          {/* isLoggedIn or !isLoggedIn */}
          <Route element={<PrivateRouter isAuthenticated={true} />}>
            <Route path={URL.BOARD_POST} element={<BoardPost />}></Route>
            <Route path={URL.MYPAGE} element={<Profile />}></Route>
          </Route>
          {/* isLoggedIn or !isLoggedIn */}
          <Route element={<PublicRouter isAuthenticated={true} />}>
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
