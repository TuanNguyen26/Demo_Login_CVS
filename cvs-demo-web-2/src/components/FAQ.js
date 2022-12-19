import React from "react";
import { Collapse } from "antd";

const { Panel } = Collapse;

export default class FAQ extends React.PureComponent {
  render() {
    const { dataSource, isMobile, ...props } = this.props;
    const { wrapper, titleWrapper, page, content } = dataSource;

    return (
      <div {...props} {...wrapper}>
        <div {...page}>
          <div {...titleWrapper} />
          <div>
            <Collapse defaultActiveKey={[]} bordered={false}>
              {content.map(item => {
                const { key, header, text } = item;
                return (
                  <Panel header={header} key={key}>
                    <p>{text}</p>
                  </Panel>
                );
              })}
            </Collapse>
          </div>
        </div>
      </div>
    );
  }
}
