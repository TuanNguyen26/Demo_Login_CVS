import React from "react";
import { Row, Col } from "antd";

export default function Benefit(props) {
  const { dataSource, isMobile, ...rest } = props;
  const { wrapper, titleWrapper, page, content1, content2 } = dataSource;

  return (
    <div {...rest} {...wrapper}>
      <div {...page}>
        <div className="description">
          <div {...titleWrapper} />
          {/* <div {...explainWrapper} /> */}
        </div>
        <Row gutter={[60, 60]}>
          {content1.map((item, key) => {
            const { img, title } = item;
            return (
              <Col md={6} xs={24} key={key}>
                <div className="benefit-block-item">
                  <div className="benefit-block-item-left">{img}</div>
                  <div className="benefit-block-item-right">
                    <div className="benefit-block-title">{title}</div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
        <Row gutter={[60, 60]} style={{ marginTop: 60 }}>
          {content2.map((item, key) => {
            const { img, title } = item;
            return (
              <Col md={6} xs={24} key={key}>
                <div className="benefit-block-item">
                  <div className="benefit-block-item-left">{img}</div>
                  <div className="benefit-block-item-right">
                    <div className="benefit-block-title">{title}</div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
      <div className="benefit-image">
        <img src="/benefit.jpg" alt="img" />
      </div>
    </div>
  );
}
