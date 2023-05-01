const Input = ({
  label,
  name,
  kind,
  register,
  type,
  required,
  placeholder,
}) => {
  return (
    <div className=" mb-2 h-full w-full">
      {kind === 'normal' ? (
        <div>
          <label
            className="mb-1 block text-sm font-medium text-gray-700"
            htmlFor={name}
          >
            {label}
          </label>
          <div
            className="rounded-md re
    lative flex  items-center shadow-sm"
          >
            <input
              id={name}
              required={required}
              {...register}
              type={type}
              placeholder={placeholder}
              className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-400 focus:border-blue-400"
            />
          </div>
        </div>
      ) : null}
      {kind === 'responsive' ? (
        <div className=" align-top relative flex items-center  rounded-md shadow-sm h-full w-full">
          <textarea
            id={name}
            required={required}
            {...register}
            type={type}
            placeholder={placeholder}
            className=" h-full w-full appearance-none rounded-md border border-gray-300 px-3 py-2 shadow-sm placeholder:text-gray-400 focus:border-blue-400 focus:outline-none focus:ring-blue-400"
          />
        </div>
      ) : null}
    </div>
  );
};

export default Input;
