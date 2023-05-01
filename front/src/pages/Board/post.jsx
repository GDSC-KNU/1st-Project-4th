import { useForm } from 'react-hook-form';
import useMutation from '@/libs/useMutation';
import { useParams } from 'react-router-dom';
import Input from '@/components/Input';
import Button from '@/components/Button';

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
    <div className=" w-full sm:px-3 px-1 mt-3">
      <form onSubmit={handleSubmit(onValid, onInvalid)}>
        <div className=" mb-12">
          <Input
            register={register('title')}
            required
            type="text"
            kind="normal"
            placeholder="제목을 입력해 주세요"
          ></Input>
          <Input
            register={register('hashtag')}
            required
            type="text"
            kind="normal"
            placeholder="해시태그 입력후 엔터를 눌러주세요"
          ></Input>
        </div>
        <div className=" h-[400px] w-full mb-12">
          <Input
            register={register('description')}
            required
            type="textarea"
            kind="responsive"
            placeholder="본문을 입력해 주세요"
          ></Input>
        </div>
        <div>
          <Button text="asds" />
        </div>
      </form>
    </div>
  );
}
