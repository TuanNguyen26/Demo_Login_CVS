import React, { Component, useState } from "react";
import { Button, Drawer, Dropdown, Space, Menu } from "antd";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import { ContactFormDataSource } from "../data/home.data";
import ContactForm from "./Home/ContactForm";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { DownOutlined, SmileOutlined, UserOutlined } from "@ant-design/icons";
import { gapi } from "gapi-script";
import { navigate } from "gatsby";
const Header2 = ({ isloginDrawer, setISLoginDrawer }) => {
  const [visible, setVisible] = useState(false);
  const [dataLogin, setDataLogin] = useState(localStorage.getItem("email"));
  const [stateLogin, setStateLogin] = useState(true);

  console.log("dataLogin", dataLogin);
  const showDrawer = () => {
    setVisible(true);
  };

  const showLogin = () => {
    setISLoginDrawer(true);
  };

  const onSuccess = success => {
    console.log("login success", success.profileObj.givenName);
    const dataUser = success.profileObj;
    localStorage.setItem("email", JSON.stringify(dataUser));
    setDataLogin(success.profileObj);
    setISLoginDrawer(false);
    setStateLogin(false);
  };

  const onFail = fail => {
    console.log("login fail", fail);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onCloseLogin = () => {
    setISLoginDrawer(false);
    localStorage.setItem("show", false);
  };

  const onLogout = out => {
    console.log("logout success", out);
    localStorage.removeItem("email");
    setDataLogin(null);
    setStateLogin(true);
  };

  return (
    <header style={{ height: 56, width: "100%", background: "#FFFFFF" }}>
      <div className="header-wrapper">
        <div style={{ lineHeight: 4 }}>
          <OutboundLink
            href="https://computervision.com.vn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button type="text" style={{ fontSize: 13, color: "red" }}>
              <img
                src="/globe-outline.svg"
                alt="image"
                style={{ marginRight: 10 }}
              />
              www.computervision.com.vn
            </Button>
          </OutboundLink>
        </div>
        <div style={{ lineHeight: 4 }}>
          <Button
            type="default"
            style={{
              height: 36,
              fontSize: 12,
              borderColor: "red",
              color: "red",
              marginRight: 20
            }}
            onClick={showDrawer}
          >
            LIÊN HỆ DÙNG THỬ
          </Button>

          {!dataLogin && (
            <Button
              type="deonCloseLoginfault"
              style={{ marginRight: "20px", height: "36px" }}
              onClick={showLogin}
            >
              Đăng Nhập
            </Button>
          )}

          {dataLogin && (
            <GoogleLogout
              clientId="491845432253-3i8n6cora433poudseeiekbt5hfi5kcu.apps.googleusercontent.com"
              buttonText="Logout"
              render={renderProps => (
                <Button
                  onClick={renderProps.onClick}
                  style={{
                    marginRight: "20px",
                    width: "120px",
                    height: "36px",
                    zIndex: 1
                  }}
                >
                  Đăng xuất
                  <UserOutlined />
                </Button>
              )}
              onLogoutSuccess={onLogout}
            />
          )}

          <Drawer
            title="Đăng nhập"
            width={472}
            onClose={onCloseLogin}
            visible={isloginDrawer}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <GoogleLogin
                clientId="491845432253-3i8n6cora433poudseeiekbt5hfi5kcu.apps.googleusercontent.com"
                buttonText="Tiếp tục với google"
                onSuccess={onSuccess}
                onFailure={onFail}
                cookiePolicy={"single_host_origin"}
                style={{ boxShadow: "none" }}
                isSignedIn={true}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "50px"
              }}
            >
              Vui lòng đăng nhập
            </div>
          </Drawer>

          <Drawer
            title="Liên hệ dùng thử"
            width={572}
            onClose={onClose}
            visible={visible}
            extra={
              <Space>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={onClose} type="primary">
                  Submit
                </Button>
              </Space>
            }
          >
            <div style={{ marginBottom: 20, marginLeft: 24 }}>
              <OutboundLink
                href="tel:0982925220"
                target="_blank"
                style={{ color: "#EC1C2A" }}
                rel="noopener noreferrer"
              >
                0982 925 220
              </OutboundLink>
            </div>
            <div style={{ marginBottom: 20, marginLeft: 24 }}>
              <OutboundLink
                href="mailto:sales@computervision.com.vn"
                target="_blank"
                style={{ color: "#EC1C2A" }}
                rel="noopener noreferrer"
              >
                sales@computervision.com.vn
              </OutboundLink>
            </div>
            <ContactForm
              id="ContactForm"
              key="ContactForm"
              dataSource={ContactFormDataSource}
              // isMobile={isMobile}
            />
          </Drawer>
        </div>
      </div>
    </header>
  );
};

export default Header2;
