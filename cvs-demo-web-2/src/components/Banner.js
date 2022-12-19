import React from "react";
import { trackEvent } from "./utils";
import styled from "styled-components";
import { Button } from "antd";

class Banner5 extends React.PureComponent {
  render() {
    const { ...tagProps } = this.props;
    const { dataSource, isMobile } = tagProps;
    const { image2, childWrapper } = dataSource;
    delete tagProps.dataSource;
    delete tagProps.isMobile;

    const [title, description] = childWrapper.children;

    return (
      <Background
        {...tagProps}
        {...dataSource.wrapper}
        image={dataSource.image.children}
        isMobile={isMobile}
      >
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
        {isMobile && image2 && (
          <div {...dataSource.image2}>
            <img src={dataSource.image2.children} width="100%" alt="img" />
          </div>
        )}
      </Background>
    );
  }
}
export default Banner5;

const Background = styled.div`
  background-image: ${props => (props.isMobile ? null : `url(${props.image})`)};
`;
