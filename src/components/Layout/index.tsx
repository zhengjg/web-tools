"use client";

import React from "react";
import Link from "next/link";
import { Layout, Menu, Card } from "antd";
import type { MenuProps } from "antd";

const { Header, Content, Footer } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 0,
  lineHeight: "64px",
  backgroundColor: "#fff",
};

const layoutStyle: React.CSSProperties = {
  backgroundColor: "#fff",
};

const items: MenuProps["items"] = [
  {
    label: "首页",
    key: "index",
  },
  {
    label: "生成工具",
    key: "SubMenu",
    children: [
      {
        label: <Link href="/barcode">条形码生成器</Link>,
        key: "barcode",
      },
    ],
  },
];

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <div className="container">
          <div className="demo-logo" />
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            items={items}
          />
        </div>
      </Header>
      <Content className="container main">{children}</Content>
      <Footer className="container footer">©2023</Footer>
    </Layout>
  );
};

export default MainLayout;
