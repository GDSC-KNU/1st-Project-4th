import useSWR from 'swr';
import { useParams } from 'react-router-dom';

export default function BoardDetail() {
  let { id } = useParams();
  const { data, error, isLoading } = useSWR(`https://msw.com/api/board/${id}`);

  return (
    <div className=" pt-2">
      <div>
        <div className="mt-2 px-4 text-gray-700">
          <span className=" inline-flex my-3 items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            질문
          </span>

          <span className=" font-bold ml-2">{data?.title}</span>
        </div>
        <div className="mt-2 px-4 text-gray-700 text-sm min-h-[100px]">
          {data?.content}
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
            <span>코멘트 {data?.comment?.length}</span>
          </span>
        </div>
      </div>
      <div className="px-4 my-5 space-y-5">
        {data?.comment.map((item, i) => (
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-slate-200 rounded-full" />
            <div className=" w-full">
              <div className=" flex justify-between">
                <span className="text-sm block font-medium text-gray-700">
                  {data?.user?.id}
                </span>
                <span className="text-xs text-gray-500 block ">
                  {item?.created_date}
                </span>
              </div>
              <p className="text-gray-700 mt-2 text-sm">{item?.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="px-4">
        <textarea
          className="mt-1 shadow-sm w-full focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500 "
          rows={4}
          placeholder="Answer this question!"
        />
        <button className="mt-2 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none ">
          Reply
        </button>
      </div>
    </div>
  );
}
