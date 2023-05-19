import React from 'react';
import { cls } from '@/hooks/cls';

export default function Button({ large = false, onClick, text, ...rest }) {
  return (
    <button
      {...rest}
      className={cls(
        'w-full rounded-md  border-[0.5px] border-[#BBBBBB]  bg-white px-4 font-medium  text-black shadow-sm hover:border-gray-300 focus:ring-1 focus:ring-blue-400',
        large ? 'py-3 text-base' : 'py-2 text-sm ',
      )}
    >
      {text}
    </button>
  );
}
