import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useSWRConfig } from 'swr';
import { useState, useEffect } from 'react';

import useMutation from '@/libs/useMutation';

import Input from '@/components/Input';
import Button from '@/components/Button';

export default function Post() {
  const { mutate } = useSWRConfig();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    resetField,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  // const { data: postsResponse, isLoading } = useSWR(
  //   `https://msw.com/api/board`,
  // );

  const [createPost, { loading, data, error }] = useMutation(
    'https://msw.com/api/board',
  );

  const onValid = async data => {
    await createPost({ ...data });
    mutate(`https://msw.com/api/board`);
    navigate(`/boards`);

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
          <Button text="등록" />
        </div>
      </form>
      {/* <Loading /> */}
    </div>
  );
}
