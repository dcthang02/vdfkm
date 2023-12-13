import TextInput from "@/components/atoms/TextInput";
import Image from "next/image";
import Link from "next/link";
import React, { FormEvent, useCallback, useContext, useRef } from "react";
import UETLogo from "@/assets/images/uet.png";
import { AuthContext } from "@/context/AuthContext";

const AuthForm = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const { login } = useContext(AuthContext);

  // Đăng nhập
  const handleLogin = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      login(usernameRef.current?.value || "", passwordRef.current?.value || "");
    },
    [usernameRef, passwordRef]
  );

  return (
    <form
      className="border h-[400px] bg-[#f1f1f1] border-[#c5c5c5]"
      onSubmit={handleLogin}
    >
      <div className="w-full left-0 top-0 p-4 ">
        <div className="py-2 border-b mb-4 text-lg uppercase text-[#007f49] font-bold">
          Đăng nhập
        </div>
        <div className="px-4 flex flex-col gap-4">
          <TextInput label="Tên đăng nhập" ref={usernameRef} />
          <TextInput label="Mật khẩu" type="password" ref={passwordRef} />
          <div className="flex justify-end mt-16 pb-2">
            <button
              type="submit"
              className="px-10 py-2 bg-slate-300 font-medium text-black cursor-pointer hover:bg-slate-400 hover:text-white"
            >
              <p>Đăng nhập</p>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AuthForm;
