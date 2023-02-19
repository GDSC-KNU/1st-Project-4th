import { Link } from 'react-router-dom';

export default function Board() {
  const post_data = [
    {
      title: 'title1',
      post_id: 1,
      content: '안녕하세요, 알고리즘 질문드립니다',
      created_date: '2012-10-12',
      modified_date: '2012-10-12',
      view_count: '12',
      user: { id: 'id- 1', level: '1', problem_count: '10' },
      comment: [{ id: 1 }, { id: 1 }, { id: 1 }],
    },
    {
      title: 'title2',
      post_id: 2,
      content: '안녕하세요, 알고리즘 질문드립니다',
      created_date: '2012-10-12',
      modified_date: '2012-10-12',
      view_count: '12',
      user: { id: 'id- 1', level: '1', problem_count: '10' },
      comment: [{ id: 1 }, { id: 1 }, { id: 1 }],
    },
    {
      title: 'title3',
      post_id: 3,
      content: '안녕하세요, 알고리즘 질문드립니다',
      created_date: '2012-10-12',
      modified_date: '2012-10-12',
      view_count: '12',
      user: { id: 'id- 1', level: '1', problem_count: '10' },
      comment: [{ id: 1 }, { id: 1 }, { id: 1 }],
    },
  ];
  return (
    <div className=" space-y-2 px-3 min-w-[300px] w-full pt-6 ">
      {post_data.map(
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
          <div className=" flex flex-col items-start">
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
              <span className=" text-sm">{' ' + `[${comment.length}]`}</span>
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
  );
}
