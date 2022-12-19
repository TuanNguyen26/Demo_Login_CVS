const axios = require("axios");
const FormData = require("form-data");

const url = "https://demo.computervision.com.vn/api/v2/ekyc/face_matching";

const recaptchaValidation = async ({ recaptchaToken }) => {
  try {
    const response = await axios({
      url: "https://www.google.com/recaptcha/api/siteverify",
      method: "POST",
      params: {
        secret: process.env.GATSBY_RECAPTCHA_V3_SECRET_KEY,
        response: recaptchaToken
      }
    });
    console.log("response.data: ", response.data);
    return {
      success: response.data.success,
      message: response.data["error-codes"] || "error",
      score: response.data.score
    };
  } catch (error) {
    let message;
    if (error.response) {
      message = `reCAPTCHA server responded with non 2xx code: ${error.response.data}`;
    } else if (error.request) {
      message = `No reCAPTCHA response received: ${error.request}`;
    } else {
      message = `Error setting up reCAPTCHA response: ${error.message}`;
    }
    return { success: false, message };
  }
};

export default async function handler(req, res) {
  if (req.method === `POST`) {
    const file1 = req.files[0];
    const file2 = req.files[1];
    let form = new FormData();
    form.append("img1", file1.buffer, file1.originalname);
    form.append("img2", file2.buffer, file2.originalname);

    const recaptchaValidationResult = await recaptchaValidation({
      recaptchaToken: req.body.recaptchaToken
    });

    if (
      !recaptchaValidationResult.success ||
      recaptchaValidationResult.score < 0.5
    ) {
      res.status(400).send(recaptchaValidationResult.message);
    } else {
      axios({
        method: "POST",
        url: `${url}?format_type=file&type1=card`,
        auth: {
          username: process.env.GATSBY_API_USERNAME,
          password: process.env.GATSBY_API_PASSWORD
        },
        data: form,
        headers: form.getHeaders()
      })
        .then(response => {
          res.json(response.data);
        })
        .catch(err => {
          res.status(400).send(err);
          // console.log(err)
        });
    }
  }

  if (req.method === `GET`) {
    const img1 = req.query.img1;
    const img2 = req.query.img2;

    const recaptchaValidationResult = await recaptchaValidation({
      recaptchaToken: req.query.recaptchaToken
    });

    if (
      !recaptchaValidationResult.success ||
      recaptchaValidationResult.score < 0.5
    ) {
      res.status(400).send(recaptchaValidationResult.message);
    } else {
      axios({
        method: "GET",
        url: `${url}?format_type=url&type1=card&img1=${encodeURI(img1)}&img2=${encodeURI(img2)}`,
        auth: {
          username: process.env.GATSBY_API_USERNAME,
          password: process.env.GATSBY_API_PASSWORD
        },
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      })
        .then(response => {
          res.json(response.data);
        })
        .catch(err => {
          res.status(400).send(err);
          // console.log(err)
        });
    }
  }
}
