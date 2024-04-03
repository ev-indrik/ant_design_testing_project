import { Flex, Layout, Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import React from "react";
import { Outlet } from "react-router-dom";

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 55,
  paddingInline: 48,
  lineHeight: "65px",
  backgroundColor: "#4096ff",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#0958d9",
};

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#1677ff",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
};

const layoutStyle = {
  overflow: "hidden",
  width: "100%",
  maxWidth: "100%",
  minHeight: "100vh",
};

const items = [
  {
    key: "home",
    label: "Home",
  },
  {
    key: "buttons",
    label: "Buttons",
  },
  {
    key: "form",
    label: "Form",
  },
];

const MainLayout: React.FC = () => {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };
  return (
    <Flex wrap="wrap">
      <Layout style={layoutStyle}>
        <Sider width="10%" style={siderStyle}>
          <Menu
            className="menuSider"
            onClick={onClick}
            // style={{ width: 256 }}
            defaultSelectedKeys={["home"]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout>
          <Header style={headerStyle}>AntDesign Test Project</Header>
          <Content style={contentStyle}>
            <Outlet />
          </Content>
          <Footer style={footerStyle}>Footer</Footer>
        </Layout>
      </Layout>
    </Flex>
  );
};

export default MainLayout;
