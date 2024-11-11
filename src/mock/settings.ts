export default [
  {
    url: '/api/settings',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'success',
        data: [
          {
            id: 1,
            name: 'basic',
            label: 'menu.system.settings.main',
            title: '基本设置',
            description: '基本设置',
            fields: [
              {
                id: 1,
                name: 'app_name',
                label: 'settings.basic.appName',
                title: '应用名称',
                type: 'input',
                width: '70%',
                placeholder: 'settings.basic.appName',
                tips: 'tipExample'
              },
              {
                id: 2,
                name: 'app_short_name',
                label: 'settings.basic.appShortName',
                title: '应用简称',
                type: 'input',
                width: '70%',
                placeholder: 'settings.basic.appShortName'
              },
              {
                id: 3,
                name: 'app_logo',
                label: 'settings.basic.appLogo',
                title: '应用图标',
                type: 'upload-image',
                width: '70%'
              },
              {
                id: 4,
                name: 'app_description',
                label: 'settings.basic.description',
                title: '应用描述',
                type: 'textarea',
                width: '70%',
                placeholder: 'settings.basic.description'
              },
              {
                id: 5,
                name: 'is_log',
                label: 'settings.basic.logEnable',
                title: '开启日志',
                type: 'switch'
              }
            ],
            data: {
              app_name: 'Element Pro',
              app_short_name: '',
              app_logo: '',
              app_description: '',
              is_log: 0
            }
          },
          {
            id: 2,
            name: 'website',
            label: 'menu.system.settings.website',
            title: '网站设置',
            description: '网站设置',
            fields: [
              {
                id: 6,
                name: 'site_name',
                label: 'settings.website.siteName',
                title: '网站名称',
                type: 'input',
                width: '70%',
                placeholder: 'settings.website.siteName'
              },
              {
                id: 7,
                name: 'is_site_off',
                label: 'settings.website.siteShutdown',
                title: '关闭网站',
                type: 'switch'
              },
              {
                id: 8,
                name: 'site_off_description',
                label: 'settings.website.shutdownReason',
                title: '网站关闭原因',
                type: 'textarea',
                width: '70%',
                condition: ['is_site_off', 1],
                placeholder: 'settings.website.shutdownReason'
              },
              {
                id: 9,
                name: 'title',
                label: 'settings.website.title',
                title: '网站标题',
                type: 'input',
                width: '70%',
                placeholder: 'settings.website.title',
                divider: {
                  label: 'settings.website.seoSettings',
                  title: 'SEO设置',
                  align: 'left'
                }
              },
              {
                id: 10,
                name: 'keywords',
                label: 'settings.website.keywords',
                title: '网站关键词',
                type: 'textarea',
                width: '70%',
                placeholder: 'settings.website.keywords'
              },
              {
                id: 11,
                name: 'description',
                label: 'settings.website.description',
                title: '网站描述',
                type: 'textarea',
                width: '70%',
                placeholder: 'settings.website.description'
              }
            ],
            data: {
              site_name: 'Elecms Pro',
              is_site_off: 0,
              site_off_description: '',
              title: 'Elecms Pro | 基于Vue3+Element UI的企业应用快速开发框架',
              keywords: '',
              description: ''
            }
          }
        ],
        redirect: '',
        wait: 3,
        status: 'success'
      }
    }
  }
]
