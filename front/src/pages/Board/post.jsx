import { useForm } from 'react-hook-form';
import useMutation from '@/libs/useMutation';
import { useParams } from 'react-router-dom';
import Input from '@/components/Input';

export default function Post() {
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
    // resetField('comment');
    // if (loading) return;
    // await createComment({ ...data });
    // mutate(`https://msw.com/api/comment/${id}`);
    return;
  };

  const onInvalid = errors => {
    if (loading) return;
  };

  return (
    <div className=" w-full sm:px-3 px-1">
      <form onSubmit={handleSubmit(onValid, onInvalid)}>
        <div className=" mb-12">
          <Input
            register={register('comment')}
            required
            name="article"
            type="text"
            kind="normal"
            placeholder="제목을 입력해 주세요"
          ></Input>
          <Input
            register={register('comment')}
            required
            name="article"
            type="text"
            kind="normal"
            placeholder="해시태그 입력후 엔터를 눌러주세요"
          ></Input>
        </div>
        <div className=" h-[400px] w-full">
          <Input
            register={register('comment')}
            required
            name="article"
            type="textarea"
            kind="responsive"
            placeholder="본문을 입력해 주세요"
          ></Input>
        </div>
      </form>
    </div>
  );
}
