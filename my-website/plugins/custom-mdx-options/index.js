const rehypeRaw = require('rehype-raw');

module.exports = function (context, options) {
  return {
    name: 'custom-mdx-options',
    configureWebpack(config, isServer, utils) {
      // 遍历所有 webpack 规则，查找使用 @mdx-js/loader 的规则
      config.module.rules.forEach(rule => {
        if (rule.use) {
          rule.use.forEach(useEntry => {
            if (
              typeof useEntry === 'object' &&
              useEntry.loader &&
              useEntry.loader.includes('@mdx-js/loader')
            ) {
              // 合并自定义的 rehypePlugins 配置
              useEntry.options = Object.assign({}, useEntry.options, {
                rehypePlugins: (useEntry.options && useEntry.options.rehypePlugins) || []
                  .concat([rehypeRaw])
              });
            }
          });
        }
      });
      return config;
    },
  };
};