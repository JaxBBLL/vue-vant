module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        modules: false,
        corejs: 3 // 声明corejs版本
      }
    ],
    '@vue/babel-preset-jsx'
  ],
  plugins: [
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        // style: true,
        // 指定样式路径
        style: name => `${name}/style/less`
      },
      'vant'
    ]
  ]
}
