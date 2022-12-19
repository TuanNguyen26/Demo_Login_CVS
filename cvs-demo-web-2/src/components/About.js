import React from "react";
import styled from "styled-components";

const Styled = styled.p`
  text-align: center;
  position: static;
  font-style: normal;
  font-size: 40px;
  font-weight: 600;
  line-height: 120%;
  color: #ec1c2a;
  height: auto;
  width: 960px;
  max-width: 100%;
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 70px;
  padding: 0 10px;
`;

export default function() {
  return (
    <div>
      <Styled>
        “Chúng tôi là đối tác đáng tin cậy giúp các doanh nghiệp nhận ra tiềm
        năng của ứng dụng trí tuệ nhân tạo để tự động hóa các quy trình của họ.”
      </Styled>
      <div className="about-image">
        <img src={"/about.png"} style={{ maxWidth: "100%" }} />
      </div>
    </div>
  );
}
