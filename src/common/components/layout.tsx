import { Layout, Drawer } from "antd";
import { useRouter } from "next/router";

import React, { ReactNode, useCallback, useState } from "react";
import { IconType } from "react-icons";

import { BiHomeAlt, BiUser } from "react-icons/bi";
import { TbBrandHipchat } from "react-icons/tb";

const BaseLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const Router = useRouter();

  return (
    <Layout>
      <Layout.Content className="max-w-screen-sm m-auto min-h-[calc(100vh-56px)] w-full bg-white">
        {children}
      </Layout.Content>

      <div className="sticky bottom-0 left- h-14 w-full py-4 bg-white max-w-screen-sm m-auto border-t-2">
        <div className="flex justify-around">
          <div
            onClick={() => {
              Router.push("/");
            }}
          >
            <BiHomeAlt className="w-6 h-6 " />
          </div>
          <div
            onClick={() => {
              Router.push("/chats");
            }}
          >
            <TbBrandHipchat className="w-6 h-full text-gray-500" />
          </div>
          <div
            onClick={() => {
              Router.push("/profile");
            }}
          >
            <BiUser className="w-6 h-6 text-gray-500" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BaseLayout;
