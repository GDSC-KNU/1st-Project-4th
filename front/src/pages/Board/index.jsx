import { Link } from 'react-router-dom';
import Pagination from '../../components/Pagination';
import useSWR from 'swr';
import { useState } from 'react';

export default function Board() {
  const {
    data: post_data,
    error,
    isLoading,
  } = useSWR('https://msw.com/api/board');
  const [currentpage, setCurrentPage] = useState(1);

  const onPageChangeHandler = pageNumber => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="  min-w-[300px] w-full pt-6 ">
      <div className=" space-y-2 px-3 ">
        {post_data &&
          post_data.map(
            (
              {
                title,
                content,
                created_date,
                modified_date,
                view_count,
                comment,
                post_id,
              },
              i,
            ) => (
              <div key={post_id} className=" flex flex-col items-start">
                <span className=" mb-1 flex items-center px-2.5  rounded-full text-xs font-medium bg-gray-100 text-gray-800 ">
                  질문
                </span>
                <div className="  text-gray-700">
                  <Link
                    className=" cursor-pointer"
                    key={post_id}
                    to={`/board/${i}`}
                  >
                    <span className=" text-blue-500 font-bold hover:underline">
                      {title}
                    </span>
                  </Link>
                  <span className=" text-sm">
                    {' ' + `[${comment.length}]`}
                  </span>
                </div>
                <div className="  text-gray-700 text-sm">
                  <span className=" "></span>
                  {content.slice(0, 50) + '...'}
                </div>
                <div
                  className={
                    i === post_data.length - 1
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
      <div className=" pt-10">
        <Pagination
          currentPage={currentpage}
          itemsCountPerpage={10}
          totalItemsCount={122}
          pageRangeDisplayed={5}
          onChange={onPageChangeHandler}
        />
      </div>
    </div>
  );
}
