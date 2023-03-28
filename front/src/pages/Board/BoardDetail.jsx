import useSWR, { useSWRConfig } from 'swr';
import { useParams } from 'react-router-dom';
import Input from '../../components/Input';
import { useForm } from 'react-hook-form';
import useMutation from '../../libs/useMutation';

export default function BoardDetail() {
  const { mutate } = useSWRConfig();
  let { id } = useParams();
  const { data: { data: post } = {}, isLoading } = useSWR(
    `https://msw.com/api/board/${id}`,
  );

  const [createComment, { loading, data, error }] = useMutation(
    'https://msw.com/api/comment',
  );

  const {
    register,
    handleSubmit,
    reset,
    resetField,
    watch,
    formState: { errors },
    setValue,
  } = useForm({ mode: 'onChange' });

  const onValid = async data => {
    resetField('comment');
    if (loading) return;
    await createComment({ ...data });
    mutate(`https://msw.com/api/board/${id}`);
    return;
  };

  const onInvalid = errors => {
    if (loading) return;
  };

  console.log(post);

  return (
    <div className=" pt-2 w-full">
      <div>
        <div className="mt-2 px-4 text-gray-700">
          <span className=" inline-flex my-3 items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            질문
          </span>

          <span className=" font-bold ml-2">{data?.title}</span>
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
      <div className="px-4 my-5 space-y-5">
        {post?.commentList.map((item, i) => (
          <div key={item.id} className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-slate-200 rounded-full" />
            <div className=" w-full">
              <div className=" flex justify-between">
                <span className="text-sm block font-medium text-gray-700">
                  {item?.user?.id}
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
        <form onSubmit={handleSubmit(onValid, onInvalid)}>
          <Input
            register={register('comment')}
            required
            label="코멘트"
            name="comment"
            type="text"
            kind="comment"
          />
          <button className="w-full bg-white  hover:border-gray-300 text-black  px-4 border-[0.5px] border-[#BBBBBB] border-transparent rounded-md shadow-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none py-3 text-base">
            작성
          </button>
        </form>
      </div>
    </div>
  );
}
