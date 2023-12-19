import React, { LegacyRef, useCallback, useState } from "react";

type TextInputProps = {
  label: string;
  eye?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;
const TextInput = (
  { label, placeholder, type, eye = false }: TextInputProps,
  ref: LegacyRef<HTMLInputElement>
) => {
  const [showPw, setShowPw] = useState(false);
  const handleShowPw = useCallback(() => {
    setShowPw(!showPw);
  }, [showPw]);
  return (
    <div>
      <p className="font-semibold text-black">{label}</p>
      <div className="flex relative">
        <input
          required
          className="flex-1 px-1 py-2 outline-none border border-[#7f9db9] focus:border-blue-600 w-full bg-slate-100"
          type={type === "password" ? (showPw ? "text" : "password") : "text"}
          ref={ref}
          placeholder={placeholder}
        />
        {eye && (
          <i
            className={`${
              showPw ? "ri-eye-off-line" : "ri-eye-line"
            } cursor-pointer absolute right-2 top-2`}
            onClick={handleShowPw}
          ></i>
        )}
      </div>
    </div>
  );
};

export default React.forwardRef(TextInput);
