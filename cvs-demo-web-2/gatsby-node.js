exports.onCreateWebpackConfig = ({
  actions,
  stage,
  rules,
  loaders,
  plugins
}) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /canvas/,
            use: loaders.null()
          }
        ]
      }
    });
  }
};

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: "babel-plugin-import",
    options: {
      libraryName: "antd",
      style: true
    }
  });
};

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;
  if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/*";
    createPage(page);
  }
};
