import React from "react";
import { Row, Col, Button, Typography } from "antd";

import { signInWithGoogle, logOut } from "../firebase/firebase";

const { Title } = Typography;

function Login() {
  // auth.onAuthStateChanged(user => {
  //   console.log("loginnnnnn user", { user });
  // });
  return (
    <div>
      <Row justify="center">
        <Col span={8}>
          <Title style={{ textAlign: "center" }} level={3}>
            Dang nhap
          </Title>
          <Button
            style={{ width: "100%", marginBottom: 5 }}
            onClick={signInWithGoogle}
          >
            Dang nhap bang google
          </Button>

          <Button style={{ width: "100%", marginBottom: 5 }} onClick={logOut}>
            Dang xuat
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
