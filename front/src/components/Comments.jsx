import useSWR, { useSWRConfig } from 'swr';
import Input from '@/components/Input';
import { useForm } from 'react-hook-form';
import useMutation from '@/libs/useMutation';
import { useParams } from 'react-router-dom';

export default function Comments() {
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

  const { data: commentResponse, isLoading } = useSWR(
    `https://msw.com/api/comment/${id}`,
  );

  console.log(commentResponse);

  const [createComment, { loading, data, error }] = useMutation(
    'https://msw.com/api/comment',
  );

  const onValid = async data => {
    resetField('comment');
    if (loading) return;
    await createComment({ ...data });
    mutate(`https://msw.com/api/comment/${id}`);
    return;
  };

  const onInvalid = errors => {
    if (loading) return;
  };
  // console.log(post);
  return (
    <>
      <div className="px-4 my-5 space-y-5">
        {commentResponse?.map((item, i) => (
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
    </>
  );
}
