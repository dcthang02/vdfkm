import Image from "next/image";
import React, { ReactNode } from "react";
import Logo from "@/assets/images/logo-vnu.png";

type AuthLayoutProps = {
  children: ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="flex flex-col h-screen">
      <div className="border-b mb-2">
        <div className="flex items-center">
          <Image src={Logo} alt="logo" height={80} />
          <h1 className="text-3xl font-semibold text-[#007f49]">vDFKM</h1>
        </div>
      </div>
      <div className="flex px-3 gap-5">
        <div className="flex-[2]">
          <div className="bg-[#ffff99] p-3 mb-10">
            <h1 className="text-2xl font-semibold">Mô tả hệ thống</h1>
            <span className="ml-10 text-sm">
              Data FABRIC-based Data PLATFORM
            </span>
          </div>
          <div className="bg-[#f9f9f9] p-3 leading-7">
            <p>
              Trong thời đại kỹ thuật số ngày nay, dữ liệu là tài sản quan trọng
              đối với các doanh nghiệp và tổ chức. Với sự tăng trưởng theo cấp
              số nhân của dữ liệu, việc phát triển các nền tảng dữ liệu hiệu quả
              để quản lý và hiểu được thông tin này ngày càng trở nên quan
              trọng. Phát triển nền tảng dữ liệu bao gồm nhiều hoạt động, bao
              gồm thu thập, lưu trữ, xử lý, phân tích và trực quan hóa dữ liệu.
              Phần này của luận án sẽ khám phá quá trình phát triển nền tảng dữ
              liệu hiện đại, tập trung vào cách áp dụng kiến trúc kết cấu dữ
              liệu. Mục đích là cung cấp cái nhìn tổng quan toàn diện về các
              bước liên quan đến việc phát triển và cung cấp những hiểu biết sâu
              sắc có thể giúp các tổ chức xây dựng nền tảng dữ liệu hiệu quả và
              năng suất hơn.
            </p>
          </div>
        </div>
        <div className="flex-[1] mt-8">{children}</div>
      </div>
      {/* <div className="w-[500px]">{children}</div> */}
    </div>
  );
};

export default AuthLayout;
