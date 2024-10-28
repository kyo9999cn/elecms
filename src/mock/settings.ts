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
            name: 'base',
            label: '基本设置',
            description: '基本设置',
            fields: [
              {
                id: 1,
                name: 'app_name',
                label: '应用名称',
                type: 'input',
                width: '70%',
                placeholder: '应用名称',
                tips: '这里是应用名称'
              },
              {
                id: 2,
                name: 'app_short_name',
                label: '应用简称',
                type: 'input',
                width: '70%',
                placeholder: '应用简称'
              },
              {
                id: 3,
                name: 'app_logo',
                label: '应用图标',
                type: 'upload-image',
                width: '70%',
                placeholder: '应用图标'
              },
              {
                id: 4,
                name: 'app_description',
                label: '应用描述',
                type: 'textarea',
                width: '70%',
                placeholder: '应用描述'
              },
              {
                id: 5,
                name: 'is_log',
                label: '开启日志',
                type: 'switch'
              }
            ],
            data: {
              app_name: 'Element Pro',
              app_short_name: '',
              app_logo: '',
              app_description: '',
              is_log: true
            }
          },
          {
            id: 2,
            name: 'site',
            label: '网站设置',
            description: '网站设置',
            fields: [
              {
                id: 6,
                name: 'site_name',
                label: '网站名称',
                type: 'input',
                width: '70%',
                placeholder: '站点名称'
              },
              {
                id: 7,
                name: 'is_site_off',
                label: '关闭网站',
                type: 'switch'
              },
              {
                id: 8,
                name: 'site_off_description',
                label: '网站关闭描述',
                type: 'textarea',
                width: '70%',
                condition: ['is_site_off', 1],
                placeholder: '网站关闭描述',
                divider: {
                  label: 'SEO设置',
                  align: 'left'
                }
              },
              {
                id: 9,
                name: 'seo_title',
                label: '网站SEO标题',
                type: 'input',
                width: '70%',
                placeholder: '网站SEO标题'
              },
              {
                id: 10,
                name: 'seo_keywords',
                label: '网站SEO关键词',
                type: 'textarea',
                width: '70%',
                placeholder: '网站SEO关键词'
              },
              {
                id: 11,
                name: 'seo_description',
                label: '网站SEO描述',
                type: 'textarea',
                width: '70%',
                placeholder: '网站SEO描述'
              }
            ],
            data: {
              site_name: 'Elecms Pro',
              is_site_off: 0,
              site_off_description: '',
              seo_title:
                'Elecms Pro | 基于Vue3+Element UI的企业应用快速开发框架',
              seo_keywords: '',
              seo_description: ''
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
