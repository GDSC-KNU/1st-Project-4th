import React from 'react';
import { cls } from '@libs/client/utils';

export default function Button({ large = false, onClick, text, ...rest }) {
  return (
    <button
      {...rest}
      className={cls(
        'w-full bg-white  hover:border-gray-300 text-black  px-4 border-[0.5px] border-[#BBBBBB] border-transparent rounded-md shadow-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none',
        large ? 'py-3 text-base' : 'py-2 text-sm ',
      )}
    >
      {text}
    </button>
  );
}
