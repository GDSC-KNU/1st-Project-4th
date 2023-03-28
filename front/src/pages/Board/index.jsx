import { Link } from 'react-router-dom';
import Pagination from '../../components/Pagination';
import useSWR from 'swr';
import { useState } from 'react';

export default function Board() {
  const {
    data: { list: posts } = {},
    error,
    isLoading,
  } = useSWR('https://msw.com/api/board');
  const [currentpage, setCurrentPage] = useState(1);

  const onPageChangeHandler = pageNumber => {
    setCurrentPage(pageNumber);
  };

  // console.log(posts);

  return (
    <div className="  min-w-[300px] w-full pt-6 px-3">
      <div className=" flex">
        <div className=" p-2 border-[1px] border-solid cursor-pointer">
          질문 게시판
        </div>
        <div className=" p-2 border-[1px] border-solid cursor-pointer">
          자유 게시판
        </div>
      </div>
      <div className=" border-[1px] mb-4 relative bottom-[1px]"></div>
      <div className=" space-y-2 mb-8">
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
              },
              i,
            ) => (
              <div key={id} className=" flex flex-col items-start">
                <span className=" mb-1 flex items-center px-2.5  rounded-full text-xs font-medium bg-gray-100 text-gray-800 ">
                  질문
                </span>
                <div className="  text-gray-700">
                  <Link className=" cursor-pointer" key={id} to={`/board/${i}`}>
                    <span className=" text-blue-500 font-bold hover:underline">
                      {title}
                    </span>
                  </Link>
                  <span className=" text-sm">{' ' + `[${comment_count}]`}</span>
                </div>
                <div className="  text-gray-700 text-sm">
                  <span className=" "></span>
                  {description.slice(0, 50) + '...'}
                </div>
                <div
                  className={
                    posts && i === posts?.length - 1
                      ? ' flex items-center justify-between w-full text-gray-500 font-medium text-xs'
                      : ' flex items-center justify-between w-full text-gray-500 font-medium text-xs border-b-[1px] border-gray-200 pb-[2px]'
                  }
                >
                  <span>User</span>
                  <div>
                    <span>{modified_date}</span>
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
              <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm h-full focus:ring-blue-500 focus:border-blue-500 block w-fit dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>정렬</option>
                <option value="US">등록순</option>
                <option value="CA">추천순</option>
                <option value="FR">댓글갯수순</option>
              </select>
            </li>
          </ol>
        </div>
        <div className=" border-[1px] border-solid p-2 cursor-pointer">
          글쓰기
        </div>
      </div>
      <div className=" pt-10">
        <Pagination
          currentPage={currentpage}
          itemsCountPerpage={10}
          ro
          pageRangeDisplayed={5}
          onChange={onPageChangeHandler}
        />
      </div>
    </div>
  );
}
