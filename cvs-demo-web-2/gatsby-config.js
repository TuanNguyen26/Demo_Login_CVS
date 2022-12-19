const siteUrl =
  process.env.URL || process.env.DEPLOY_URL || "https://computervision.com.vn/";

module.exports = {
  siteMetadata: {
    title: `Computer Vision Vietnam`,
    name: `Computer Vision Vietnam`,
    siteUrl: `https://computervision.com.vn/`,
    description: `Computer Vision Vietnam - Công nghệ Computer Vision cho các doanh nghiệp`,
    social: [
      {
        name: `facebook`,
        url: `https://www.facebook.com/computervisionvietnam/`
      }
    ],
    siteVerification: {
      google: `V8MIu5oVu6COC6Y-Ez_DAcXllNFcl4fXggw5JNoOyIA`
    },
    siteName: `computervision.com.vn`,
    defaultImage: `/site-image.png`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-KN187T7J22", "AW-660981705"],
        pluginConfig: {
          head: true
        }
      }
    },
    {
      resolve: "gatsby-plugin-antd",
      options: {
        style: true
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Computer Vision Vietnam`,
        short_name: `CVS`,
        start_url: `/`,
        icon: "static/favicon.png"
      }
    },
    {
      resolve: `gatsby-plugin-less`,
      options: {
        javascriptEnabled: true,
        modifyVars: {
          "primary-color": "#EC1C2A"
        }
      }
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteUrl,
        sitemap: siteUrl + "/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }]
      }
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`vi`, `en`],
        // language file path
        defaultLanguage: `vi`
        // option to redirect to `/vi` when connecting `/`
        // redirect: true,
      }
    },

    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] }
    },
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-use-query-params`
    // `gatsby-transformer-remark`
    // "gatsby-transformer-sharp",
    // "gatsby-plugin-sharp"
  ]
};
