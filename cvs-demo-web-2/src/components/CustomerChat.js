import React, { useEffect } from "react";
const facebookAppId = "110110363934558";

export default function CustomerChat() {
  useEffect(() => {
    window.fbAsyncInit = function() {
      window.FB.init({
        xfbml: true,
        version: "v9.0"
      });
    };
    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  });
  return (
    <>
      <div id="fb-root" />
      <div
        className="fb-customerchat"
        attribution="setup_tool"
        page_id={facebookAppId}
        logged_in_greeting="Xin chào! Chúng tôi rất hân hạnh được phục vụ. Bạn cần hỗ trợ gì ạ?"
        logged_out_greeting="Xin chào! Chúng tôi rất hân hạnh được phục vụ. Bạn cần hỗ trợ gì ạ?"
        theme_color="#EC1C2A"
      />
    </>
  );
}
