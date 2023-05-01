import useSWR from 'swr';
import { useParams } from 'react-router-dom';

import Comments from '@/components/Comments';

export default function BoardDetail() {
  let { id } = useParams();
  const { data: { data: post } = {}, isLoading } = useSWR(
    `https://msw.com/api/board/${id}`,
  );

  return (
    <div className=" pt-2 w-full">
      <div>
        <div className="mt-2 px-4 text-gray-700">
          <span className=" inline-flex my-3 items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            질문
          </span>

          <span className=" font-bold ml-2">{post?.title}</span>
        </div>
        <div className="mt-2 px-4 text-gray-700 text-sm min-h-[100px]">
          {post?.description}
        </div>
        <div className="flex px-4 space-x-5 mt-3 text-gray-700 py-2.5 border-t border-b-[2px]  w-full">
          <span className="flex space-x-2 items-center text-sm">
            <svg
              className="w-4 h-4"
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
