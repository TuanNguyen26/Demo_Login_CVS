import React from "react";
import { Row, Col, Card } from "antd";
import { trackEvent } from "./utils";
import { Link } from "gatsby-plugin-intl";

const { Meta } = Card;

export default class RelatedProducts extends React.PureComponent {
  render() {
    const { dataSource, isMobile, ...props } = this.props;
    const { wrapper, titleWrapper, page, childWrapper } = dataSource;
    return (
      <div {...props} {...wrapper}>
        <div {...page}>
          <div {...titleWrapper} />
          <Row>
            {childWrapper.children.map((block, i) => {
              const { children: item, ...blockProps } = block;
              return (
                <Col key={i.toString()} {...blockProps}>
                  <Link to={item.to}>
                    <Card
                      hoverable
                      cover={<img alt="img" src={item.imgSource} />}
                      bordered={false}
                      onClick={() => trackEvent(item.linkEvent || item.to)}
                    >
                      <Meta
                        title={item.title}
                        description={
                          <div>
                            <div className="description">
                              {item.description}
                            </div>
                            <div className="view-detail-button">
                              Xem chi tiết
                            </div>
                          </div>
                        }
                      />
                    </Card>
                  </Link>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    );
  }
}
