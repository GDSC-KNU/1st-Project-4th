import { Link, useNavigate, useLocation } from 'react-router-dom';
import Pagination from '@/components/Pagination';
import useSWR from 'swr';
import { useEffect, useState } from 'react';
import { URL } from '@/constants/url';
import { VITE_HOME_URL } from '@/constants/apiUrl';

export default function Board() {
  const [currentPage, setCurrentPage] = useState(1);
  const queryParams = new URLSearchParams(window.location.search);
  const category = queryParams.get('category');
  const {
    data: { list: posts } = {},
    error,
    isLoading,
  } = useSWR(
    `${VITE_HOME_URL}/api/boards?category=${category}&page=${currentPage}`,
  );

  const navigate = useNavigate();

  const onPageChangeHandler = pageNumber => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const newUrl = `${window.location.pathname}?category=${category}&page=${currentPage}`;
    window.history.pushState(null, '', newUrl);
  }, [category, currentPage]);

  return (
    <div className="  w-full min-w-[300px] px-3">
      <div className=" mb-8 mt-4 space-y-2">
        {posts &&
          posts.map(
            (
              {
                title,
                description,
                created_date,
                modified_date,
                view_count,
                comment_count,
                id,
                status,
              },
              i,
            ) => (
              <div key={id || i} className=" flex flex-col items-start">
                <span className=" mb-1 flex items-center rounded-full  bg-gray-100 px-2.5 text-xs font-medium text-gray-800 ">
                  {status === 'DISCUSS' ? '토론' : '질문'}
                </span>
                <div className="  text-gray-700">
                  <Link
                    className=" cursor-pointer"
                    key={id}
                    to={`${URL.HOME}board/${i}`}
                  >
                    <span className=" font-bold text-blue-500 hover:underline">
                      {title}
                    </span>
                  </Link>
                  <span className=" text-sm">{' ' + `[${comment_count}]`}</span>
                </div>
                <div className="  text-sm text-gray-700">
                  <span className=" "></span>
                  {description?.slice(0, 50) + '...'}
                </div>
                <div
                  className={
                    posts && i === posts?.length - 1
                      ? ' flex w-full items-center justify-between text-xs font-medium text-gray-500'
                      : ' flex w-full items-center justify-between border-b-[1px] border-gray-200 pb-[2px] text-xs font-medium text-gray-500'
                  }
                >
                  <span>User</span>
                  <div>
                    <span>{modified_date || created_date}</span>
                    <span> | </span>
                    <span>조회 {view_count}</span>
                  </div>
                </div>
              </div>
            ),
          )}
      </div>
      <div className=" flex justify-between">
        <div>
          <ol className=" flex">
            <li className=" border-[1px] border-solid p-2">전체글</li>
            <li className=" border-[1px] border-solid p-2">인기글</li>
            <li className="">
              {/* <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm h-full focus:ring-blue-500 focus:border-blue-500 block w-fit dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>정렬</option>
                <option value="US">등록순</option>
                <option value="CA">추천순</option>
                <option value="FR">댓글갯수순</option>
              </select> */}
            </li>
          </ol>
        </div>
        <div
          onClick={() => navigate(URL.BOARD_POST)}
          className=" cursor-pointer border-[1px] border-solid p-2"
        >
          글쓰기
        </div>
      </div>
      <div className=" pt-10">
        <Pagination
          currentPage={currentPage}
          itemsCountPerpage={10}
          pageRangeDisplayed={5}
          onChange={onPageChangeHandler}
        />
      </div>
    </div>
  );
}
