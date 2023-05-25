import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useSWR, { useSWRConfig } from 'swr';
import { useState, useEffect } from 'react';

import useMutation from '@/hooks/useMutation';

import Input from '@/components/Input';
import Button from '@/components/Button';
import { URL } from '@/constants/url';
import { VITE_HOME_URL } from '@/constants/apiUrl';

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
          <div className=" relative flex h-full w-full  items-center rounded-md align-top shadow-sm">
            {/* <textarea
              id={name}
              required={required}
              {...register}
              type={type}
              placeholder={placeholder}
              className=" h-full w-full appearance-none rounded-md border border-gray-300 px-3 py-2 shadow-sm placeholder:text-gray-400 focus:border-blue-400 focus:outline-none focus:ring-blue-400"
            /> */}
            <label
              htmlFor="default"
              className=" sr-only mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Default select
            </label>
            <select
              id="default"
              className="mb-6 block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            >
              <option value="질문">질문</option>
              <option value="토론">토론</option>
            </select>
          </div>
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
