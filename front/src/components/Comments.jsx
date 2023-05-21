import useSWR, { useSWRConfig } from 'swr';
import Input from '@/components/Input';
import { useForm } from 'react-hook-form';
import useMutation from '@/hooks/useMutation';
import { useParams } from 'react-router-dom';
import { URL } from '@/constants/url';
import { VITE_HOME_URL } from '@/constants/apiUrl';

export default function Comments({ post = {} }) {
  let { id } = useParams();
  const { mutate } = useSWRConfig();
  const {
    register,
    handleSubmit,
    reset,
    resetField,
    watch,
    formState: { errors },
    setValue,
  } = useForm({ mode: 'onChange' });

  const { commentList } = post;
  // const { data: commentResponse, isLoading } = useSWR(
  //   `${VITE_HOME_URL}/api/comment/${id}`,
  // );

  const [createComment, { loading, data, error }] = useMutation(
    `${VITE_HOME_URL}/api/comment`,
  );

  const onValid = async data => {
    resetField('comment');
    if (loading) return;
    await createComment({ ...data });
    mutate(`${VITE_HOME_URL}/api/board/${id}`);
    return;
  };

  const onInvalid = errors => {
    if (loading) return;
  };
  // console.log(post);
  return (
    <>
      <div className="my-5 space-y-5 px-4">
        {commentList?.map((item, i) => (
          <div key={item.id} className="flex items-start space-x-3">
            <div className="h-8 w-8 rounded-full bg-slate-200" />
            <div className=" w-full">
              <div className=" flex justify-between">
                <span className="block text-sm font-medium text-gray-700">
                  {item?.user?.id}
                </span>
                <span className="block text-xs text-gray-500 ">
                  {item?.created_date}
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-700">{item?.content}</p>
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
            kind="normal"
          />
          <button className="w-full rounded-md  border-[0.5px] border-[#BBBBBB]  border-transparent bg-white px-4 py-3 text-base font-medium text-black shadow-sm hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            작성
          </button>
        </form>
      </div>
    </>
  );
}
