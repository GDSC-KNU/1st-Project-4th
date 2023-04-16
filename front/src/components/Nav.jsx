import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <header className=" fixed top-0 z-20 h-12 w-full bg-white  py-2 shadow-md">
      <nav className="flex w-full items-center justify-between">
        <ul className=" ml-2 flex items-center space-x-2 whitespace-nowrap uppercase">
          <li className=" cursor-pointer ">
            <Link className=" font-mono font-bold text-xl ml-1" to="/">
              ALgoHelper
            </Link>
          </li>
          <div className=" hidden md:flex">
            <li className="">
              <Link to="/board">자유 게시판</Link>
            </li>
            <li className=" ml-4">
              <Link to="/board">토론 게시판</Link>
            </li>
            {'user' ? (
              <li className=" ml-4">
                <Link to="/board/post">글쓰기</Link>
              </li>
            ) : null}
          </div>
        </ul>

        <ul className=" flex items-center whitespace-nowrap mr-2">
          <div className=" mr-2">searchModal</div>
          {/* <SearchAutoComplete /> */}
          {'user !== admin' ? null : <li className=" mr-3">Admin</li>}
          {'Session' ? (
            <li className=" mr-3 flex min-w-[26px] cursor-pointer items-center p-0">
              <a className=" flex items-center rounded-full" href="/profile">
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
          {'!Session' ? (
            <Link className="min-w-[30px]" to="/enter">
              로그인
            </Link>
          ) : (
            <li>
              <Link to="/profile/1">마이 페이지</Link>
            </li>
          )}
        </ul>
      </nav>
      <div className=" flex list-none space-x-6 whitespace-nowrap bg-white px-3 py-2 shadow-md md:hidden">
        <li className="">
          <Link to="/board">자유 게시판</Link>
        </li>
        <li className=" ml-4">
          <Link to="/board">토론 게시판</Link>
        </li>
        {'user' ? (
          <li className=" ml-4">
            <Link to="/board/post">글쓰기</Link>
          </li>
        ) : null}
      </div>
    </header>
  );
};

export default Nav;
