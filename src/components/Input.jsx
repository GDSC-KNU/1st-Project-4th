const Input = ({ label, name, kind, register, type, required }) => {
  return (
    <div className=" mb-2">
      <>
        <label
          className="mb-1 block text-sm font-medium text-gray-700"
          htmlFor={name}
        >
          코멘트 작성
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
            placeholder="한줄평을 입력해주세요. 과도한 비방, 욕설, 도배는 차단됩니다."
            className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-400 focus:border-blue-400"
          />
        </div>
      </>
    </div>
  );
};

export default Input;
