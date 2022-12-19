import React from "react";
import { Button } from "antd";
import {
  MailFilled,
  PhoneFilled,
  EnvironmentFilled,
  DownOutlined
} from "@ant-design/icons";
import { FormattedMessage } from "gatsby-plugin-intl";
import { OutboundLink } from "gatsby-plugin-google-gtag";

export const Nav40DataSource = {
  wrapper: { className: "header3 home-page-wrapper" },
  page: { className: "home-page" },
  logo: {
    className: "header3-logo",
    children: "/computervision-logo.svg"
  },

  MenuMobile: {
    className: "header3-menu",
    children: [
      {
        name: "item7",
        className: "header3-item",
        title: "0982 925 220",
        href: "tel:0982925220",
        target: "_blank"
      },
      {
        name: "item8",
        className: "header3-item",
        title: "sales@computervision.com.vn",
        href: "mailto:sales@computervision.com.vn",
        target: "_blank"
      },
      {
        name: "item9",
        className: "header3-item",
        title: "https://computervision.com.vn",
        href: "https://computervision.com.vn",
        target: "_blank"
      },
      {
        name: "item4",
        className: "header3-item",
        to: "/company/contact",
        title: (
          <Button
            type="primary"
            style={{
              height: 36,
              fontSize: 12
            }}
          >
            DÙNG THỬ MIỄN PHÍ
          </Button>
        )
      }
    ]
  },
  mobileMenu: { className: "header3-mobile-menu" }
};

export const Banner50DataSource = {
  wrapper: { className: "home-page-wrapper banner5" },
  page: { className: "home-page banner5-page" },
  childWrapper: {
    className: "banner5-title-wrapper",
    children: [
      {
        name: "content",
        className: "banner5-content",
        children: (
          <p>
            Nền tảng Computer Vision mạnh mẽ và sẵn dùng cho mọi doanh nghiệp
          </p>
        )
      },
      {
        name: "content",
        className: "banner5-description",
        children: (
          <p>
            Cung cấp công cụ cho các doanh nghiệp tăng tốc chuyển đổi số và tự
            động hóa thông minh bằng cách sử dụng công nghệ AI và Computer
            Vision tiên phong của chúng tôi.
          </p>
        )
      },
      {
        name: "button",
        className: "banner5-button-wrapper",
        href: "#ContactForm",
        children: {
          className: "banner5-button",
          type: "primary",
          children: "DÙNG THỬ MIỄN PHÍ"
        }
      }
    ]
  },
  image: {
    className: "banner5-image",
    children: "/banner0.jpg"
  },
  image2: {
    className: "banner5-image",
    children: "/banner0_1.jpg"
  }
};
export const DeploymentDataSource = {
  wrapper: { className: "home-page-wrapper deployment" },
  page: { className: "home-page deployment-page" },
  childWrapper: {
    className: "deployment-title-wrapper",
    children: [
      {
        name: "content",
        className: "deployment-content",
        children: <p>Nền tảng API mạnh mẽ - Triển khai linh hoạt</p>
      }
    ]
  },
  content: [
    {
      name: "block0",
      className: "deployment-block",
      image: { className: "deployment-block-image", src: "/deployment0.svg" },
      title: {
        className: "deployment-block-title",
        children: "Cloud Platform"
      },
      description: {
        className: "deployment-block-description",
        children:
          "Sử dụng CVS Vision Cloud API để tối ưu chi phí và nhanh chóng đưa sản phẩm đến người dùng."
      }
    },
    {
      name: "block1",
      className: "deployment-block",
      image: { className: "deployment-block-image", src: "/deployment1.svg" },
      title: { className: "deployment-block-title", children: "On-Premise" },
      description: {
        className: "deployment-block-description",
        children:
          "Chúng tôi sẽ triển khai CVS Vision APIs trên các máy chủ riêng để tuân thủ các tiêu chuẩn nội bộ trong doanh nghiệp."
      }
    }
  ],
  image: {
    className: "deployment-image",
    children: "/deployment_1.jpg"
  }
};
export const ContactFormDataSource = {
  wrapper: { className: "home-page-wrapper contact-form" },
  page: { className: "home-page contact-form-page" },
  childWrapper: {
    className: "contact-form-title-wrapper",
    children: [
      {
        name: "content",
        className: "contact-form-content"
        // children: <p>Liên hệ ngay với chúng tôi</p>
      },
      // {
      //   name: "content",
      //   className: "underline"
      // },
      {
        name: "content",
        className: "contact-form-description",
        children: (
          <p style={{ textAlign: "left" }}>
            Computer Vision Vietnam luôn sẵn sàng lắng nghe yêu cầu từ quý khách
            hàng. Liên hệ với chúng tôi để nhận được hỗ trợ.
          </p>
        )
      }
    ]
  },
  image: {
    className: "contact-form-image",
    children: "/contact-form.jpg"
  }
};
export const CustomersDataSource = {
  wrapper: { className: "home-page-wrapper customers-wrapper" },
  page: { className: "home-page customers" },
  titleWrapper: {
    className: "title-wrapper",
    children: "Được tin dùng bởi các doanh nghiệp hàng đầu"
  },
  content: [
    {
      key: "0",
      md: 4,
      xs: 24,
      children: <img src="/customer0.jpg" alt="img" width={170} height={84} />
    },
    {
      key: "1",
      md: 4,
      xs: 24,
      children: <img src="/customer1.jpg" alt="img" width={170} height={84} />
    },
    {
      key: "2",
      md: 4,
      xs: 24,
      children: <img src="/customer2.jpg" alt="img" width={170} height={84} />
    },
    {
      key: "3",
      md: 4,
      xs: 24,
      children: <img src="/customer3.jpg" alt="img" width={170} height={84} />
    },
    {
      key: "4",
      md: 4,
      xs: 24,
      children: <img src="/customer4.jpg" alt="img" width={170} height={84} />
    },
    {
      key: "5",
      md: 4,
      xs: 24,
      children: <img src="/customer5.jpg" alt="img" width={170} height={84} />
    },
    {
      key: "6",
      md: 4,
      xs: 24,
      children: <img src="/customer6.jpg" alt="img" width={170} height={84} />
    },
    {
      key: "7",
      md: 4,
      xs: 24,
      children: <img src="/customer7.jpg" alt="img" width={170} height={84} />
    },
    // {
    //   key: "8",
    //   md: 4,
    //   xs: 24,
    //   children: <img src="/customer8.jpg" alt="img" width={170} height={84} />
    // },
    {
      key: "9",
      md: 4,
      xs: 24,
      children: <img src="/customer9.jpg" alt="img" width={170} height={84} />
    },
    {
      key: "10",
      md: 4,
      xs: 24,
      children: <img src="/customer10.jpg" alt="img" width={170} height={84} />
    },
    {
      key: "11",
      md: 4,
      xs: 24,
      children: <img src="/customer11.jpg" alt="img" width={170} height={84} />
    },
    {
      key: "12",
      md: 4,
      xs: 24,
      children: <img src="/customer12.jpg" alt="img" width={170} height={84} />
    },
    {
      key: "13",
      md: 4,
      xs: 24,
      children: <img src="/customer13.jpg" alt="img" width={170} height={84} />
    },
    // {
    //   key: "14",
    //   md: 4,
    //   xs: 24,
    //   children: <img src="/customer14.jpg" alt="img" width={170} height={84} />
    // },
    {
      key: "15",
      md: 4,
      xs: 24,
      children: <img src="/customer15.jpg" alt="img" width={170} height={84} />
    },
    {
      key: "16",
      md: 4,
      xs: 24,
      children: <img src="/customer16.jpg" alt="img" width={170} height={84} />
    },
    {
      key: "17",
      md: 4,
      xs: 24,
      children: <img src="/customer17.jpg" alt="img" width={170} height={84} />
    },
    {
      key: "18",
      md: 4,
      xs: 24,
      children: <img src="/customer18.jpg" alt="img" width={170} height={84} />
    }
  ]
};

export const SidebarDataSource = {
  wrapper: { className: "home-page-wrapper sidebar-wrapper" },
  page: { className: "home-page sidebar" },
  content: [
    {
      key: "1",
      tab: "Trang chủ"
    },
    {
      key: "2",
      tab: "Nhận diện ký tự",
      link: "/ocr"
    },
    {
      key: "3",
      tab: "eKYC",
      link: "/solutions/e-kyc"
    },
    {
      key: "4",
      tab: "Nhận diện khuôn mặt",
      link: "/facial-recognition"
    },
    {
      key: "5",
      tab: "Xử lý hình ảnh",
      link: "/image-recognition"
    }
  ]
};

export const Feature100DataSource = {
  wrapper: { className: "home-page-wrapper feature100-wrapper" },
  page: { className: "home-page feature100" },
  titleWrapper: {
    className: "title-wrapper",
    children: "Trang chủ"
  },
  content: [
    {
      key: "1",
      tab: "Nhận diện ký tự",
      children: [
        // {
        //   img: <img src="Frame6.png" alt="image" />
        // },
        // {
        //   img: <img src="Frame7.png" alt="image" />
        // },
        // {
        //   img: <img src="Frame8.png" alt="image" />
        // }
        {
          img: <img src="/app0.svg" alt="img" width={48} height={48} />,
          title: "Chứng minh nhân dân",
          content:
            "Nhận diện thông tin từ hình ảnh của các loại CMND: CMND 9 số, CMND 12 số, Căn cước công dân, CCCD gắn chip.",
          link: "/products/ocr/vietnam-id-cards"
        },
        {
          img: <img src="/app1.svg" alt="img" width={48} height={48} />,
          title: "Hộ chiếu Việt Nam",
          content:
            "Nhận diện thông tin tiếng Việt từ hình ảnh của hộ chiếu Việt Nam.",
          link: "/products/ocr/vietnam-id-cards",
          linkEvent: "/products/ocr/vietnam-id-cards-1"
        },
        {
          img: <img src="/app2.svg" alt="img" width={48} height={48} />,
          title: "Giấp phép lái xe",
          content: "Nhận diện thông tin từ hình ảnh của giấy phép lái xe.",
          link: "/products/ocr/vietnam-id-cards",
          linkEvent: "/products/ocr/vietnam-id-cards-2"
        },
        {
          img: <img src="/app4.svg" alt="img" width={48} height={48} />,
          title: "Giấy đăng ký xe",
          content: "Nhận diện thông tin từ giấy đăng ký xe máy, ô tô.",
          link: "/products/ocr/vehicle-registration"
        },
        {
          img: <img src="/app4.svg" alt="img" width={48} height={48} />,
          title: "Giấy đăng kiểm xe",
          content: "Nhận diện thông tin từ giấy đăng kiểm xe ô tô.",
          link: "/products/ocr/vehicle-inspection-certficicate"
        },
        {
          img: <img src="/app6.svg" alt="img" width={48} height={48} />,
          title: "Biển số xe",
          content: "Nhận diện biển số xe.",
          link: "/products/ocr/license-plate"
        },
        {
          img: <img src="/app7.svg" alt="img" width={48} height={48} />,
          title: "Giấy khai sinh",
          content:
            "Nhận diện thông tin từ hình ảnh giấy khai sinh gồm cả chữ in và chữ viết tay.",
          link: "/products/ocr/birth-certificate"
        },
        {
          img: <img src="/app8.svg" alt="img" width={48} height={48} />,
          title: "Giấy đăng ký doanh nghiệp",
          content:
            "Nhận diện thông tin doanh nghiệp và người đại diện pháp luật từ hình ảnh của giấy chứng nhận đăng ký doanh nghiệp.",
          link: "/products/ocr/business-registration-certificate"
        },
        {
          img: <img src="/app9.svg" alt="img" width={48} height={48} />,
          title: "Dữ liệu dạng bảng",
          content:
            "Chuyển đổi hình ảnh của các dữ liệu dạng bảng như bảng điểm, đơn thuốc, báo cáo tài chính ... thành dữ liệu file excel.",
          link: "/products/ocr/table"
        },
        {
          img: <img src="/app10.svg" alt="img" width={48} height={48} />,
          title: "Hộ chiếu quốc tế",
          content:
            "Nhận diện và phân tích mã MRZ để trả về thông tin từ hình ảnh của hộ chiếu bất kì.",
          link: "/products/ocr/passport"
        },
        {
          img: <img src="/app0.svg" alt="img" width={48} height={48} />,
          title: "ID Card Myanmar",
          content:
            "Nhận diện thông tin cá nhân từ hình ảnh của ID Card Myanmar.",
          link: "/products/ocr/myanmar-id-card"
        },
        {
          img: <img src="/app0.svg" alt="img" width={48} height={48} />,
          title: "ID Card Cambodia",
          content:
            "Nhận diện thông tin cá nhân từ hình ảnh của ID Card Campuchia.",
          link: "/products/ocr/cambodia-id-card"
        },
        {
          img: <img src="/app0.svg" alt="img" width={48} height={48} />,
          title: "ID Card Philippines",
          content:
            "Nhận diện thông tin cá nhân từ hình ảnh của ID Card Philippines.",
          link: "/products/ocr/philippines-id-card"
        },
        {
          img: <img src="/app11.svg" alt="img" width={48} height={48} />,
          title: "Nhận diện văn bản",
          content:
            "Chuyển đổi hình ảnh của văn bản sang dạng text cho phép tra cứu nội dung tài liệu.",
          link: "/products/ocr/image-to-text"
        }
      ],
      link: "/ocr"
    },
    {
      key: "2",
      tab: "Nhận diện khuôn mặt",
      children: [
        {
          img: <img src="/app12.svg" alt="img" width={48} height={48} />,
          title: "Xác minh danh tính",
          content:
            "So sánh ảnh selfie và ảnh chân dung trên các loại giấy tờ tùy để xác minh có cùng một người hay không.",
          link: "/products/facial-recognition/face-verification"
        },
        {
          img: <img src="/app13.svg" alt="img" width={48} height={48} />,
          title: "Tìm kiếm khuôn mặt",
          content:
            "Từ ảnh chân dung đầu vào, tìm kiếm trong một tập ảnh và trả về danh sách các ảnh trùng khớp với ảnh đầu vào và metadata được lưu gắn kèm với các ảnh đó.",
          link: "/products/facial-recognition/face-search"
        },
        {
          img: <img src="/app14.svg" alt="img" width={48} height={48} />,
          title: "Tạo ảnh đại diện",
          content:
            "Tự động nhận diện khuôn mặt và tạo ảnh đại diện với kích thước tùy biến.",
          link: "/products/facial-recognition/smart-avatar"
        },
        {
          img: <img src="/app15.svg" alt="img" width={48} height={48} />,
          title: "Phân tích khuôn mặt",
          content:
            "Phân tích giới tính, độ tuổi, cảm xúc từ hình ảnh chứa khuôn mặt.",
          link: "/products/facial-recognition/face-analysis"
        },
        {
          img: <img src="/app16.svg" alt="img" width={48} height={48} />,
          title: "Phân cụm khuôn mặt",
          content:
            "Tự động nhận diện và phân nhóm các khuôn mặt giống nhau trong một tập ảnh",
          link: "/products/facial-recognition/face-grouping"
        }
      ],
      link: "/facial-recognition"
    },
    {
      key: "3",
      tab: "Xử lý hình ảnh",
      children: [
        {
          img: <img src="/app14.svg" alt="img" width={48} height={48} />,
          title: "Smart crop",
          content:
            "Tự động cắt hình ảnh của bạn một cách thích hợp giúp giữ lại chủ thể chính của hình ảnh.",
          link: "/products/image-recognition/smart-crop"
        },
        {
          img: <img src="/app17.svg" alt="img" width={48} height={48} />,
          title: "Tagging",
          content: "Tự động hóa quy trình gắn thẻ hình ảnh của bạn.",
          link: "/products/image-recognition/tagging"
        }
      ],
      link: "/image-recognition"
    }
  ]
};
export const Feature101DataSource = {
  wrapper: { className: "home-page-wrapper feature101-wrapper" },
  page: { className: "home-page feature101" },
  titleWrapper: {
    className: "title-wrapper",
    children: "Trên khắp các ngành công nghiệp - Đa dạng các trường hợp sử dụng"
  },
  content: [
    {
      key: "1",
      tab: "eKYC",
      children: [
        {
          img: (
            <img src="/feature101_0.jpg" alt="img" width={360} height={458} />
          ),
          title: "eKYC - Định danh khách hàng trực tuyến",
          content:
            "Ứng dụng các sản phẩm OCR, so khớp khuôn mặt, phát hiện giả mạo để cung cấp một giải pháp định danh trực tuyến hoàn chỉnh, an toàn và mang lại trải nghiệm tuyệt vời cho khách hàng.",
          link: "/solutions/e-kyc"
        }
      ]
    },
    {
      key: "2",
      tab: "Bảo hiểm",
      children: [
        {
          img: (
            <img src="/feature101_1.jpg" alt="img" width={360} height={458} />
          ),
          title:
            "Ứng dụng các công nghệ Computer Vision trong lĩnh vực bảo hiểm",
          content:
            "CVS INSURTECH là giải pháp thị giác máy tính toàn diện cho ngành bảo hiểm giúp các doanh nghiệp bảo hiểm tự động hóa trong xử lý giấy tờ nhằm giảm thiểu chi phí vận hành, nâng cao trải nghiệm khách hàng khi triển khai các dịch vụ trực tuyến.",
          link: "/solutions/insurance"
        }
      ]
    },
    {
      key: "4",
      tab: "Văn phòng thông minh",
      children: [
        {
          img: (
            <img src="/feature101_3.jpg" alt="img" width={360} height={458} />
          ),
          title: "iOffice - Giải pháp quản lý khách ra vào thông minh",
          content: (
            <>
              Ứng dụng công nghệ nhận diện khuộn mặt, tự động trích xuất thông
              tin giấy tờ tùy thân và xác minh danh tính để tự động hóa quy
              trình check-in của khách, giúp tiền sảnh đẹp, hiện đại và tạo ấn
              tượng đầu tiên tốt cho khách.
              <br />
              Cung cấp công cụ để tăng cường an ninh và quản lý văn phòng hiệu
              quả.
            </>
          ),
          href: "https://ioffice.ai/"
        }
      ]
    },
    {
      key: "3",
      tab: "Xuất bản nội dung",
      children: [
        {
          img: (
            <img src="/feature101_2.jpg" alt="img" width={360} height={458} />
          ),
          title:
            "Lĩnh vực xuất bản nội dung và ứng dụng công nghệ Computer Vision",
          content:
            "Cung cấp các công cụ xử lý ảnh tự động thông minh cho ngành xuất bản, nội dung.",
          link: "/solutions/media-publishing"
        }
      ]
    }
  ]
};
export const Footer10DataSource = {
  wrapper: { className: "home-page-wrapper footer1-wrapper" },
  OverPack: { className: "footer1" },
  block: {
    className: "home-page",
    gutter: 0,
    children: [
      {
        name: "block0",
        xs: 24,
        md: 7,
        className: "block",
        // title: {
        //   className: "logo",
        //   children: (
        //     <Link to="/" onClick={() => trackEvent("/")}>
        //       <img src="/computervision-logo.svg" alt="logo" />
        //     </Link>
        //   ),
        // },
        childWrapper: {
          className: "slogan",
          children: [
            {
              name: "content0",
              children: (
                <>
                  <EnvironmentFilled />
                  <div>
                    <b>
                      <FormattedMessage id="footer.address1" />
                    </b>
                    <p>
                      <FormattedMessage id="common.address1" />
                    </p>
                  </div>
                </>
              )
            },
            {
              name: "content3",
              children: (
                <>
                  <EnvironmentFilled style={{ visibility: "hidden" }} />
                  <div>
                    <b>
                      <FormattedMessage id="footer.address2" />
                    </b>
                    <p>
                      <FormattedMessage id="common.address2" />
                    </p>
                  </div>
                </>
              )
            },
            {
              name: "content1",
              children: (
                <>
                  <MailFilled />
                  <OutboundLink
                    target="_blank"
                    href="mailto:sales@computervision.com.vn"
                    style={{ padding: 0 }}
                  >
                    sales@computervision.com.vn
                  </OutboundLink>
                </>
              )
            },
            {
              name: "content2",
              children: (
                <>
                  <PhoneFilled />
                  <OutboundLink
                    target="_blank"
                    href="tel:0982925220"
                    style={{ padding: 0 }}
                  >
                    0982 925 220
                  </OutboundLink>
                </>
              )
            }
          ]
        }
      },
      {
        name: "block1",
        xs: 24,
        md: 4,
        className: "block",
        title: { children: "Sản phẩm", className: "block-title" },
        childWrapper: {
          children: [
            {
              to: "/products/ocr",
              name: "link0",
              children: "Nhận diện ký tự"
            },
            {
              to: "/products/facial-recognition",
              name: "link1",
              children: "Nhận diện khuôn mặt"
            },
            {
              to: "/products/image-recognition",
              name: "link2",
              children: "Nhận diện hình ảnh"
            }
          ]
        }
      },
      {
        name: "block2",
        xs: 24,
        md: 4,
        className: "block",
        title: {
          children: "Giải pháp",
          className: "block-title"
        },
        childWrapper: {
          name: "link-wrapper",
          children: [
            {
              to: "/solutions/e-kyc",
              name: "link0",
              children: "eKYC"
            },
            {
              to: "/solutions/insurance",
              name: "link1",
              children: "Insurtech"
            },
            {
              href: "https://ioffice.ai/",
              name: "link4",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "Intelligent Office"
            },
            {
              to: "/solutions/media-publishing",
              name: "link3",
              children: "Media Publishing"
            }
          ]
        }
      },
      {
        name: "block3",
        xs: 24,
        md: 4,
        className: "block",
        title: { children: "Tài nguyên", className: "block-title" },
        childWrapper: {
          children: [
            {
              href: "https://www.computervision.vn/",
              name: "link0",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "Blog"
            }
          ]
        }
      },
      {
        name: "block4",
        xs: 24,
        md: 4,
        offset: 1,
        className: "block",
        title: { children: "Về chúng tôi", className: "block-title" },
        childWrapper: {
          children: [
            {
              to: "/company/about",
              name: "link1",
              children: "Về chúng tôi"
            },
            {
              to: "/company/contact",
              name: "link2",
              children: "Liên hệ"
            }
          ]
        }
      }
    ]
  },
  copyrightWrapper: { className: "copyright-wrapper" },
  copyrightPage: { className: "home-page" },
  copyright: {
    className: "copyright",
    children: (
      <span>
        <FormattedMessage id="footer.copyright" />
      </span>
    )
  }
};
export const Feature45DataSource = {
  wrapper: { className: "home-page-wrapper feature45-wrapper" },
  page: { className: "home-page feature45" },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "",
        className: "text",
        children: (
          <span>
            <p>Truyền thông nói về CVS</p>
          </span>
        )
      }
    ]
  },
  childWrapper: {
    className: "feature45-block-wrapper",
    children: [
      {
        name: "block0",
        className: "feature45-block",
        md: 8,
        xs: 24,
        children: {
          href:
            "https://cafebiz.vn/ung-dung-thi-giac-may-tinh-so-hoa-cho-nganh-bao-hiem-20210118170635574.chn",
          imgSource: "/news01.jpg",
          title: "Ứng dụng thị giác máy tính: Số hóa cho ngành bảo hiểm",
          description:
            "Tự động hóa quá trình nhập liệu, nhận dạng và so khớp khuôn mặt bằng công nghệ AI, trích xuất thông tin trực tiếp từ ảnh chụp giấy tờ chỉ trong 2 giây; giải pháp thị giác máy tính CVS Insurtech đang tạo ra làn sóng mới cho cuộc cách mạng chuyển đổi số ngành bảo hiểm."
        }
      },
      {
        name: "block1",
        className: "feature45-block",
        md: 8,
        xs: 24,
        children: {
          href:
            "https://baodautu.vn/chubb-life-viet-nam-ung-dung-cong-nghe-hien-dai-de-dinh-danh-khach-hang-d126262.html",
          imgSource: "/news02.jpg",
          title:
            "Chubb Life Việt Nam ứng dụng công nghệ hiện đại để định danh khách hàng",
          description:
            "Với thao tác đơn giản, thông tin khách hàng Chubb Life Việt Nam sẽ tự động được nhận diện, trích xuất thành ký tự thông qua công nghệ hiện đại OCR với tính chính xác cao, tiết kiệm thời gian."
        }
      },
      {
        name: "block2",
        className: "feature45-block",
        md: 8,
        xs: 24,
        children: {
          href:
            "https://www.tienphong.vn/xa-hoi/nguoi-dan-da-nang-nhan-ho-tro-tu-atm-gao-tri-tue-nhan-tao-1707499.tpo",
          imgSource: "/news03.jpg",
          title: "Người dân Đà Nẵng nhận hỗ trợ từ ATM gạo trí tuệ nhân tạo",
          description:
            "TPO - ATM gạo ở Đà Nẵng được tái khởi động để hỗ trợ người nghèo, người có hoàn cảnh khó khăn... vượt qua thời gian giãn cách xã hội vì dịch bệnh COVID - 19. ATM gạo được ứng dụng công nghệ AI (trí tuệ nhân tạo) để tự độ..."
        }
      }
    ]
  }
};
export const Feature46DataSource = {
  wrapper: { className: "home-page-wrapper feature45-wrapper" },
  page: { className: "home-page feature45" },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "",
        className: "text",
        children: (
          <span>
            <p>
              <FormattedMessage id="home.feature45.title" />
            </p>
          </span>
        )
      }
    ]
  },
  // explainWrapper: {
  //   className: 'explain-wrapper',
  //   children: [
  //     {
  //       name: 'explain',
  //       children: (
  //         <span>
  //           <p>Với các công nghệ AI mới nhất, CVS Nhận dạng khuôn mặt APIs giúp tăng tốc quy trình định danh khách hàng cùng giải pháp tự động hóa với chi phí tối ưu.</p>
  //         </span>
  //       ),
  //     },
  //   ],
  // },
  childWrapper: {
    className: "feature45-block-wrapper",
    children: [
      {
        name: "block1",
        className: "feature45-block",
        md: 8,
        xs: 24,
        children: {
          href:
            "https://vietnamnews.vn/economy/771448/banks-rush-to-apply-modern-technologies-in-digital-transformation.html",
          imgSource: "/news04.jpg",
          title:
            "Banks rush to apply modern technologies in digital transformation",
          description: `The VPBank's eKYC helps customers open banking accounts without face-to-face meetings. — Photo courtesy of VPBank`
        }
      },
      {
        name: "block2",
        className: "feature45-block",
        md: 8,
        xs: 24,
        children: {
          href:
            "https://www.intellasia.net/life-insurance-companies-race-against-themselves-in-the-digital-age-805897",
          imgSource: "/news05.jpg",
          title:
            "Intellasia East Asia News - Life insurance companies race against themselves in the digital age",
          description:
            "01-Sep-2020 Informative articles concerning East Asia. All insurance companies were aware that investing in digital was the most effective solution to provide customers with high quality experiences. In fact (Finance, Vietnam)"
        }
      }
    ]
  }
};
