import React, { LegacyRef } from "react";

type TextInputProps = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
const TextInput = (
  { label, placeholder, type }: TextInputProps,
  ref: LegacyRef<HTMLInputElement>
) => {
  return (
    <div>
      <p className="font-semibold text-black">{label}</p>
      <input
        className="px-1 py-2 outline-none border border-[#7f9db9] focus:border-blue-600 w-full bg-slate-100"
        type={type}
        ref={ref}
        placeholder={placeholder}
      />
    </div>
  );
};

export default React.forwardRef(TextInput);
