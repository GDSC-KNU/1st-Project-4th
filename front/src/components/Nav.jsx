import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { getUserIsLoggedIn } from '../store/userState';

import { URL } from '../constants/url';

const Nav = () => {
  const isLoggedIn = useRecoilValue(getUserIsLoggedIn);

  return (
    <header className=" fixed top-0 z-20 h-12 w-full bg-white  py-2 shadow-md">
      <nav className="flex w-full items-center justify-between">
        <ul className=" ml-2 flex items-center space-x-2 whitespace-nowrap uppercase">
          <li className=" cursor-pointer ">
            <Link className=" font-mono font-bold text-xl ml-1" to={URL.HOME}>
              ALgoHelper
            </Link>
          </li>
          <div className=" hidden md:flex">
            <li className="">
              <Link to={URL.BOARD}>자유 게시판</Link>
            </li>
            <li className=" ml-4">
              <Link to={URL.BOARD}>토론 게시판</Link>
            </li>
            {isLoggedIn ? (
              <li className=" ml-4">
                <Link to={URL.BOARD_POST}>글쓰기</Link>
              </li>
            ) : null}
          </div>
        </ul>

        <ul className=" flex items-center whitespace-nowrap mr-2">
          <div className=" mr-2">searchModal</div>
          {'user !== admin' ? null : <li className=" mr-3">Admin</li>}
          {isLoggedIn ? (
            <li className=" mr-3 flex min-w-[26px] cursor-pointer items-center p-0">
              <a className=" flex items-center rounded-full" href={URL.MYPAGE}>
                {/* <Image
                  className=" rounded-full"
                  src={nextSession?.user?.image ?? ''}
                  width={26}
                  height={26}
                  alt={nextSession?.user?.id ?? ''}
                ></Image> */}
                <div>Icon</div>
              </a>
            </li>
          ) : null}
          {isLoggedIn ? (
            <li>
              <Link to={URL.MYPAGE}>마이 페이지</Link>
            </li>
          ) : (
            <Link className="min-w-[30px]" to={URL.ENTER}>
              로그인
            </Link>
          )}
        </ul>
      </nav>
      <div className=" flex list-none space-x-6 whitespace-nowrap bg-white px-3 py-2 shadow-md md:hidden">
        <li className="">
          <Link to={URL.BOARD}>자유 게시판</Link>
        </li>
        <li className=" ml-4">
          <Link to={URL.BOARD}>토론 게시판</Link>
        </li>
        {'user' ? (
          <li className=" ml-4">
            <Link to={URL.BOARD_POST}>글쓰기</Link>
          </li>
        ) : null}
      </div>
    </header>
  );
};

export default Nav;
