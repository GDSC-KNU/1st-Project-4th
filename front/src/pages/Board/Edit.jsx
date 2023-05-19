import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useSWR, { useSWRConfig } from 'swr';
import { useState, useEffect } from 'react';

import useMutation from '@/hooks/useMutation';

import Input from '@/components/Input';
import Button from '@/components/Button';
import { URL } from '@/constants/url';
import { VITE_HOME_URL } from '@/constants/apiUrl';

export default function Edit() {
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
  //   `${URL.DOMAIN}${URL.BOARDS}`,
  // );

  const [createPost, { loading, data, error }] = useMutation(
    `${VITE_HOME_URL}/api/board`,
  );

  const onValid = async data => {
    await createPost(data);
    mutate(`${VITE_HOME_URL}/api/boards`);
    navigate(`${URL.BOARDS}`);

    return;
  };

  const onInvalid = errors => {
    if (loading) return;
  };

  return (
    <div className=" mt-3 w-full px-1 sm:px-3">
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
        <div className=" mb-12 h-[400px] w-full">
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
