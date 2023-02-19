import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className=" flex fixed top-0 bg-gray-500 w-full h-12 items-center">
      <ul className=" flex w-full justify-between font-bold whitespace-nowrap">
        <div className=" flex mx-3 p-2">
          <li className=" min-w-[30px]">
            <NavLink to="/">홈</NavLink>
          </li>
          <li className=" ml-4 min-w-[40px]">
            <NavLink to="/board">게시판</NavLink>
          </li>
        </div>
        <div className="  flex mx-3 p-2">
          <li className=" ml-4  ">
            <NavLink className="min-w-[30px]" to="/enter">
              로그인
            </NavLink>
          </li>
          <li className=" ml-4">
            <NavLink to="/profile/1">마이 페이지</NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
