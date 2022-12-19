import "./src/styles/global.css";
import React from "react";
import { Layout } from "antd";

import Sidebar2 from "./src/components/Sidebar/Sidebar";

export const wrapPageElement = ({ props, element }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar2></Sidebar2>
      <Layout>{element}</Layout>
    </Layout>
  );
};
