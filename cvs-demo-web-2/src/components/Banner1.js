import React from "react";
import { trackEvent } from "./utils";
import styled from "styled-components";
import { Button } from "antd";

class Banner5 extends React.PureComponent {
  render() {
    const { ...tagProps } = this.props;
    const { dataSource } = tagProps;
    const { childWrapper } = dataSource;

    delete tagProps.dataSource;
    delete tagProps.isMobile;

    const [title, description] = childWrapper.children;

    return (
      <div {...tagProps} {...dataSource.wrapper}>
        <div {...dataSource.page}>
          <div {...dataSource.childWrapper}>
            <div {...title} />
            <div {...description} />
            <a href="#ContactForm" className="banner5-button-wrapper">
              <Button
                type="primary"
                className="banner5-button"
                onClick={() => trackEvent("Dùng thử miễn phí")}
              >
                DÙNG THỬ MIỄN PHÍ
              </Button>
            </a>
          </div>
        </div>
        <div {...dataSource.image}>
          <img src={dataSource.image.children} width="100%" alt="img" />
        </div>
      </div>
    );
  }
}
export default Banner5;
