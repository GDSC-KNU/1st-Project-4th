import React from 'react';
import { cls } from '@/libs/cls';

export default function Button({ large = false, onClick, text, ...rest }) {
  return (
    <button
      {...rest}
      className={cls(
        'w-full bg-white  text-black hover:border-gray-300  px-4 border-[0.5px] border-[#BBBBBB]  rounded-md shadow-sm font-medium focus:ring-1 focus:ring-blue-400',
        large ? 'py-3 text-base' : 'py-2 text-sm ',
      )}
    >
      {text}
    </button>
  );
}
