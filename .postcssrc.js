/**
 *postCSS配置文件
*/
module.exports = {
  // 配置使用postCSS插件
  plugins: {
    // 配置使用 autoprefixer 插件
    // 作为：生成浏览器CSS 样式前缀的生成规则
    //     autoprefixer: { //autoprefixer 插件的信息
    //     // 配置要兼容到的环境信息
    //   browsers: ['Android >= 4.0', 'iOS >= 8']
    // },
    // 配置使用postcss-pxtorem 插件
    'postcss-pxtorem': {
      rootValue ({ file }) {
        // 如果是vant 配置的样式 就按照 37.5
        // 如果是我们自己写的样式 就按照75
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },
      // 配置要转换CSS 属性
      // * 表示所有
      propList: ['*']
    }
  }
}
