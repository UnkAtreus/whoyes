import { Layout, Drawer } from "antd";
import Link from "next/link";
import React, { ReactNode, useCallback, useState } from "react";
import { MenuUnfoldOutlined } from "@ant-design/icons";

const BaseLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const handleOnClose = useCallback(() => setIsOpenDrawer(false), []);

  const handleDrawerToggle = () => {
    setIsOpenDrawer(true);
  };

  return (
    <Layout>
      <Layout.Content className="max-w-screen-sm m-auto flex h-[calc(100vh-56px)] w-full bg-red-300 px-6">
        {children}
      </Layout.Content>
      <div className="fixed bottom-0 left-0 bg-red-700 h-14 w-full"></div>
    </Layout>
  );
};

export default BaseLayout;
