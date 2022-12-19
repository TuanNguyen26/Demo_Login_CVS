import React, { Component } from "react";
import { enquireScreen } from "enquire-js";
import { injectIntl } from "gatsby-plugin-intl";
import loadable from "@loadable/component";
import DemoPage3 from "./DemoPage3";

const Layout = loadable(() => import("./Layout"));
const SEO = loadable(() => import("./SEO"));

let isMobile;
enquireScreen(b => {
  isMobile = b;
});

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile
    };
  }

  componentDidMount() {
    enquireScreen(b => {
      this.setState({ isMobile: !!b });
    });
  }

  render() {
    const { intl } = this.props;

    return (
      <>
        <SEO title="Xử lý hình ảnh | CVS" />
        <Layout>
          <DemoPage3 />
        </Layout>
      </>
    );
  }
}

export default injectIntl(IndexPage);
