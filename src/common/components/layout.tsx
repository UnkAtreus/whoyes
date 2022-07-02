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
      <Layout.Header
        className="relative flex items-center justify-center px-4 py-2"
        style={{
          position: "fixed",
          zIndex: 10,
          width: "100%",
          padding: 0,
        }}
      >
        <div
          className="absolute left-6 flex h-full cursor-pointer items-center"
          role="presentation"
          onClick={handleDrawerToggle}
        >
          <MenuUnfoldOutlined style={{ color: "white", fontSize: "24px" }} />
        </div>
        {/* <Link href="/">
          <img
            className="h-4/5 w-32 cursor-pointer bg-blue-400"
            alt="logo"
            src=""
            height="auto"
            width="auto"
          />
        </Link> */}
      </Layout.Header>
      <Drawer
        title="Basic Drawer"
        placement="left"
        closable={false}
        onClose={handleOnClose}
        visible={isOpenDrawer}
        key="menu"
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
      <Layout>
        <Layout.Content>{children}</Layout.Content>
      </Layout>
    </Layout>
  );
};

export default BaseLayout;
