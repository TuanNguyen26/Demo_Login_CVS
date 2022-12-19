import React, { useState } from "react";
import TweenOne from "rc-tween-one";
import { Menu, Select, Button, Space } from "antd";
import { PlusOutlined, UserOutlined } from "@ant-design/icons";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import { trackEvent } from "../components/utils";
import { IntlContextConsumer, changeLocale, Link } from "gatsby-plugin-intl";
import styled from "styled-components";

const { SubMenu, Item } = Menu;
const { Option } = Select;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneOpen: undefined,
      isMobile: false
    };
  }
  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    let currentHideNav = window.innerWidth <= 767;
    if (currentHideNav !== this.state.isMobile) {
      this.setState({ isMobile: currentHideNav });
    }
  }

  phoneClick = () => {
    const phoneOpen = !this.state.phoneOpen;
    this.setState({
      phoneOpen
    });
  };

  handleChange = () => {};

  render() {
    const { dataSource } = this.props;
    const { phoneOpen, isMobile } = this.state;
    const { Menu: navData, wrapper, page, MenuMobile: navData2 } = dataSource;
    const moment = phoneOpen === undefined ? 300 : null;

    return (
      <header className={wrapper.className}>
        <div className={`${page.className}${phoneOpen ? " open" : ""}`}>
          {isMobile && (
            <div
              {...dataSource.mobileMenu}
              onClick={() => {
                this.phoneClick();
              }}
              onKeyDown={() => {
                this.phoneClick();
              }}
              role="button"
              tabIndex="0"
            >
              <em />
              <em />
              <em />
            </div>
          )}
          <TweenOne
            {...dataSource.Menu}
            animation={
              isMobile
                ? {
                    x: 0,
                    height: 0,
                    duration: 300,
                    onComplete: e => {
                      if (this.state.phoneOpen) {
                        e.target.style.height = "auto";
                      }
                    },
                    ease: "easeInOutQuad"
                  }
                : null
            }
            moment={moment}
            reverse={!!phoneOpen}
          >
            <MenuTop>
              {!isMobile && (
                <OutboundLink
                  href="https://computervision.com.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button type="text" style={{ fontSize: 13, color: "red" }}>
                    <img
                      src="/globe-outline.png"
                      alt="image"
                      style={{ marginRight: 10 }}
                    />
                    www.computervision.com.vn
                  </Button>
                </OutboundLink>
              )}
              {!isMobile && (
                <>
                  <Button
                    type="default"
                    style={{
                      height: 36,
                      fontSize: 12,
                      borderColor: "red",
                      color: "red"
                    }}
                    onClick={this.showDrawer}
                  >
                    LIÊN HỆ DÙNG THỬ
                  </Button>
                  <Drawer
                    title="Liên hệ dùng thử"
                    width={572}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    bodyStyle={{ paddingBottom: 80 }}
                    extra={
                      <Space>
                        <Button onClick={this.onClose}>Cancel</Button>
                        <Button onClick={this.onClose} type="primary">
                          Submit
                        </Button>
                      </Space>
                    }
                  ></Drawer>
                </>
              )}
            </MenuTop>
          </TweenOne>
        </div>
      </header>
    );
  }
}

export default Header;

const MenuTop = styled.div`
  padding: 8px 20px;
  font-size: 13px;
  position: relative;
`;
