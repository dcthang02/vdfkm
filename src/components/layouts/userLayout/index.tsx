import Image from "next/image";
import Link from "next/link";
import React, { ReactNode, useMemo } from "react";
import SkipRight from "@/assets/images/skip-right-fill.svg";
import Logo from "@/assets/images/logo-vnu.png";

type UserLayoutProps = {
  children: ReactNode;
};

const UserLayout = ({ children }: UserLayoutProps) => {
  const routes = useMemo(
    () => [
      {
        id: 0,
        name: "Overview",
      },
      {
        id: 1,
        name: "Airbyte",
        link: "https://airbyte.vdkm.duckdns.org/",
      },
      {
        id: 2,
        name: "Minio",
        link: "https://lake.vdkm.duckdns.org",
      },
      {
        id: 3,
        name: "Airflow",
        link: "http://localhost:8082",
      },
      {
        id: 4,
        name: "Trino Server",
        link: "https://sql.vdkm.duckdns.org",
      },
      {
        id: 5,
        name: "Datahub",
        link: "https://vdkm.duckdns.org",
      },
      {
        id: 6,
        name: "Superset",
        link: "http://localhost:8088",
      },
      {
        id: 7,
        name: "Dspace",
        link: "https://sandbox.dspace.org/login",
      },
    ],
    []
  );
  return (
    <div className="flex gap-5">
      <div className=" bg-gray-200 h-screen w-[300px]">
        <div className="mb-10">
          <Image src={Logo} alt="logo" />
          <h1 className="text-center font-semibold text-3xl text-[#007f49]">
            vDFKM
          </h1>
        </div>
        <div>
          {routes.map((route) => {
            return (
              <Link
                href={route.link || "/"}
                key={`route-${route.id}`}
                className="pl-5 py-3 hover:bg-[#007f49] hover:text-white flex gap-2"
              >
                <i className="ri-arrow-right-double-line"></i>
                {route.name}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default UserLayout;
