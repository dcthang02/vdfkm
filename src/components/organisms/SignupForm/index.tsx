import TextInput from "@/components/atoms/TextInput";
import { AuthContext } from "@/context/AuthContext";
import Link from "next/link";
import React, { FormEvent, useCallback, useContext, useRef } from "react";

const SignupForm = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const cfPasswordRef = useRef<HTMLInputElement>(null);

  const { signup } = useContext(AuthContext);

  const handleSignup = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (passwordRef.current?.value === cfPasswordRef.current?.value)
        signup(
          usernameRef.current?.value as string,
          passwordRef.current?.value as string
        );
    },
    [usernameRef, passwordRef, cfPasswordRef]
  );
  return (
    <form
      className="border bg-[#f1f1f1] border-[#c5c5c5]"
      onSubmit={handleSignup}
    >
      <div className="w-full left-0 top-0 p-4 ">
        <div className="py-2 border-b mb-4 text-lg uppercase text-[#007f49] font-bold">
          Đăng ký
        </div>
        <div className="px-4 flex flex-col gap-4">
          <TextInput label="Tên đăng nhập" ref={usernameRef} />
          <TextInput label="Mật khẩu" type="password" ref={passwordRef} eye />
          <TextInput
            label="Nhập lại mật khẩu"
            type="password"
            ref={cfPasswordRef}
            eye
          />
          <div className="flex justify-end pb-2">
            <button
              type="submit"
              className="px-10 py-2 bg-slate-300 font-medium text-black cursor-pointer hover:bg-slate-400 hover:text-white"
            >
              <p>Đăng Ký</p>
            </button>
          </div>
          <div className="flex gap-2">
            <p>Đã có tài khoản?</p>
            <Link
              className="text-blue-400 hover:text-blue-500"
              href={"/auth/login"}
            >
              Đăng nhập
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignupForm;
