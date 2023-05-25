import useSWR from 'swr';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { URL } from '@/constants/url';
import { VITE_HOME_URL } from '@/constants/apiUrl';

import Comments from '@/components/Comments';
import useUser from '@/hooks/useUser';

export default function BoardDetail() {
  let { id } = useParams();
  const { user } = useUser();
  const { data: { data: post } = {}, isLoading } = useSWR(
    `${VITE_HOME_URL}/api/board/${id}`,
  );

  // const { data: userData } = useSWR(`${VITE_HOME_URL}/api/user/${id}`);

  return (
    <div className=" w-full pt-2">
      <div>
        <div className=" mt-2 flex  justify-between  px-4 text-gray-700">
          <div>
            <span className=" my-3 inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
              질문
            </span>
            <span className=" ml-2 font-bold">{post?.title}</span>
          </div>
          <Link
            to={`${URL.HOME}board/edit/${id}`}
            className=" my-auto text-sm text-blue-600"
          >
            수정하기
          </Link>
        </div>
        <div className="mt-2 min-h-[100px] px-4 text-sm text-gray-700">
          {post?.description}
        </div>
        <div className="mt-3 flex w-full space-x-5 border-b-[2px] border-t px-4 py-2.5  text-gray-700">
          <span className="flex items-center space-x-2 text-sm">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              ></path>
            </svg>
            <span> 코멘트 {post?.comment_count}</span>
          </span>
        </div>
      </div>
      <Comments post={post} />
    </div>
  );
}
