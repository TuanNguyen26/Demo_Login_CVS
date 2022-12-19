import React from "react";
import { Router } from "@reach/router";
import Ekyc from "../../components/ekyc";
import Default from "../../components/index";
import FacialRecognition from "../../components/facial-recognition";
import Ocr from "../../components/ocr";
import ImageRecognition from "../../components/image-recognition";
import PrivateRoute from "../../components/PrivateRouter";
const App = () => {
  return (
    <Router basepath="/app">
      <PrivateRoute path="/facial-recognition" component={FacialRecognition} />
      <PrivateRoute path="/image-recognition" component={ImageRecognition} />
      <PrivateRoute path="/ekyc" component={Ekyc} />
      <PrivateRoute path="/ocr" component={Ocr} />
      <Default path="/" />
    </Router>
  );
};
export default App;
