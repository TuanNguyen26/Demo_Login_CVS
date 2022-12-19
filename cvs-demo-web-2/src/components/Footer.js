import React, { Component } from "react";
import styled from "styled-components";
export class Footer extends Component {
  render() {
    return (
      <Footer1>
        <Copyright>
          Copyright ©2020 by Computer Vision Vietnam. All Rights Reserved
        </Copyright>
      </Footer1>
    );
  }
}

export default Footer;

const Footer1 = styled.footer`
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  background: #ffffff;
`;

const Copyright = styled.div`
  text-align: center;
  line-height: 3.5;
`;
