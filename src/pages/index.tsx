import React from "react";
import VDFKMImage from "@/assets/images/vdfkm.png";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="text-2xl">Hệ thống vDFKM</h1>
      <Image src={VDFKMImage} alt="img" width={500} />
      <div className="flex flex-col gap-8 p-10">
        <p>
          Trong thời đại kỹ thuật số ngày nay, các doanh nghiệp đang tạo và thu
          thập một lượng dữ liệu đáng kể từ nhiều nguồn khác nhau như mạng xã
          hội, tương tác của khách hàng và thiết bị IoT. Dữ liệu này được lưu ở
          nhiều định dạng và vị trí khác nhau, bao gồm cơ sở dữ liệu, lưu trữ
          đám mây và hệ thống tại chỗ, khiến việc quản lý và truy cập dữ liệu
          trở nên khó khăn.
        </p>
        <p>
          Do đó, giải pháp kết cấu dữ liệu nguồn mở là cần thiết để thống nhất
          dữ liệu phân tán của bạn nhằm giúp tự động hóa việc quản lý dữ liệu và
          phân tích dữ liệu.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
