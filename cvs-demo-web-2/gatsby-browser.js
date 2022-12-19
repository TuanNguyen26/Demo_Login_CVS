import "./src/styles/global.css";
import React from "react";
import { Layout } from "antd";

// import LayoutComponent from "./src/components/Layout";

import loadable from "@loadable/component";
import Sidebar2 from "./src/components/Sidebar/Sidebar";
// import { Header } from "antd/lib/layout/layout";

// const Header2 = loadable(() => import("./src/components/Header2"));

export const wrapPageElement = ({ props, element }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar2></Sidebar2>
      <Layout>{element}</Layout>
    </Layout>
  );
};
