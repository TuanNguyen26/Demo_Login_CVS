import React, { Component } from "react";
import { enquireScreen } from "enquire-js";
import { injectIntl } from "gatsby-plugin-intl";

import { ContactFormDataSource } from "../../data/home.data";
import loadable from "@loadable/component";

const Layout = loadable(() => import("../../components/Layout"));
const SEO = loadable(() => import("../../components/SEO"));
const ContactForm = loadable(() => import("../../components/Home/ContactForm"));

let isMobile;
enquireScreen(b => {
  isMobile = b;
});

class Contact extends Component {
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
        <SEO title={intl.formatMessage({ id: "seo.title_page52" })} />
        <Layout>
          <ContactForm
            id="ContactForm"
            key="ContactForm"
            dataSource={ContactFormDataSource}
            isMobile={this.state.isMobile}
          />
        </Layout>
      </>
    );
  }
}

export default injectIntl(Contact);
