import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav';
import Enter from './pages/Enter';
import Board from './pages/Board';
import Profile from './pages/Profile';
import BoardDetail from './pages/Board/BoardDetail';
import { SWRConfig } from 'swr';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
    <GoogleOAuthProvider clientId="783621219436-8lrjsgnio1oapou3aeaf6b43gn80sbvg.apps.googleusercontent.com">
      <SWRConfig
        value={{
          fetcher: url => fetch(url).then(response => response.json()),
        }}
      >
        <div className="App">
          <BrowserRouter>
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
          </BrowserRouter>
        </div>
      </SWRConfig>
    </GoogleOAuthProvider>
  );
}

export default App;
