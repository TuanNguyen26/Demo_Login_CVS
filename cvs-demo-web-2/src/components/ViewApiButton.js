import React from "react";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import { Button } from "antd";

export default function ViewApiButton() {
  return (
    <OutboundLink
      href="https://docs.computervision.com.vn/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button
        danger
        block
        style={{ height: 48, marginTop: 24, background: "transparent" }}
      >
        <span style={{ whiteSpace: "normal" }}>
          XEM TÀI LIỆU API DÀNH CHO LẬP TRÌNH VIÊN
        </span>
      </Button>
    </OutboundLink>
  );
}
