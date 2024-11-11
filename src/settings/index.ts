export default {
  applicationName: 'Elecms Pro',
  applicationDescription: '基于Vue3+Element UI的企业应用快速开发框架',

  // 首页路由
  indexLabel: 'menu.dashboard',
  indexName: '工作台',
  indexPath: '/dashboard',
  // 主题
  loginTheme: 'light', // dark | light, 默认light
  // 侧边栏
  asideDefaultWidth: 200,
  asideCollapseWidth: 64,
  // 版权信息
  copyright: 'Copyright © 2019-2025 小白fate',
  footer: true,
  // 多语言
  locales: [
    {
      label: '简体中文',
      icon: '',
      value: 'zhCn'
    },
    {
      label: '繁体中文',
      icon: '',
      value: 'zhTw'
    },
    {
      label: '英语',
      icon: '',
      value: 'en'
    }
  ],
  defaultLang: 'zhCn'
}
