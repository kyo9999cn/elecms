export default [
  {
    url: '/api/develop/entry/fields/model',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'success',
        data: {
          name: 'entryFields',
          label: 'form.developEntryFields.model',
          title: '字段',
          columns: [
            {
              key: 'name',
              dataKey: 'name',
              title: '字段名称',
              label: 'form.developEntryFields.name',
              langKey: 'label',
              width: 220
            },
            {
              key: 'type',
              dataKey: 'type',
              title: '类型',
              label: 'form.developEntryFields.type',
              langKey: 'type_label',
              width: 160
            },
            {
              key: 'memo',
              dataKey: 'memo',
              title: '备注',
              label: 'form.developEntryFields.memo'
            },
            {
              key: 'status',
              dataKey: 'status',
              title: '状态',
              label: 'form.developEntryFields.status',
              type: 'switch',
              width: 80,
              fixed: 'right'
            }
          ],
          actions_width: 180,
          actions: [
            {
              key: 'edit',
              type: 'primary',
              event: 'edit',
              label: 'actions.edit',
              title: '修改'
            },
            {
              key: 'delete',
              type: 'danger',
              event: 'delete',
              label: 'actions.delete',
              title: '删除'
            }
          ],
          search_fields: [
            {
              name: 'name',
              title: '字段名称',
              label: 'form.developEntryFields.name',
              type: 'input',
              placeholder: 'form.developEntryFields.name'
            }
          ],
          fields: [
            {
              name: 'name',
              label: 'form.developEntryFields.name',
              title: '字段名称',
              type: 'input',
              placeholder: 'form.developEntryFields.name'
            },
            {
              name: 'label',
              label: 'form.developEntryFields.label',
              title: '多语言标签',
              type: 'input',
              placeholder: 'form.developEntryFields.label'
            },
            {
              name: 'type_key',
              label: 'form.developEntryFields.type',
              title: '字段类型',
              type: 'select',
              placeholder: 'form.developEntryFields.type',
              options: [
                {
                  label: 'field.input',
                  title: '文本框',
                  value: 'input'
                },
                {
                  label: 'field.textarea',
                  title: '多行文本',
                  value: 'textarea'
                },
                {
                  label: 'field.select',
                  title: '选择框',
                  value: 'select'
                },
                {
                  label: 'field.number',
                  title: '数字框',
                  value: 'number'
                },
                {
                  label: 'field.password',
                  title: '密码框',
                  value: 'number'
                },
                {
                  label: 'field.radio',
                  title: '单选框',
                  value: 'radio'
                },
                {
                  label: 'field.checkbox',
                  title: '多选框',
                  value: 'checkbox'
                },
                {
                  label: 'field.switch',
                  title: '开关',
                  value: 'switch'
                },
                {
                  label: 'field.image',
                  title: '图片上传框',
                  value: 'upload-image'
                },
                {
                  label: 'field.video',
                  title: '视频上传框',
                  value: 'upload-video'
                },
                {
                  label: 'field.audio',
                  title: '音频上传框',
                  value: 'upload-audio'
                },
                {
                  label: 'field.file',
                  title: '文件上传框',
                  value: 'upload-file'
                },
                {
                  label: 'field.richtext',
                  title: '富文本编辑器',
                  value: 'richtext'
                }
              ]
            },
            {
              name: 'default_value',
              label: 'form.developEntryFields.defaultValue',
              title: '默认值',
              type: 'input',
              placeholder: 'form.developEntryFields.defaultValue'
            },
            {
              name: 'is_numerical',
              label: 'form.developEntryFields.numerical',
              title: '是否数值型',
              type: 'switch'
            },
            {
              name: 'is_async',
              label: 'form.developEntryFields.async',
              title: '开启异步',
              type: 'switch'
            },
            {
              name: 'url',
              label: 'form.developEntryFields.url',
              title: '调用地址',
              type: 'input',
              condition: ['is_async', 1],
              placeholder: 'form.developEntryFields.url'
            },
            {
              name: 'options',
              label: 'form.developEntryFields.options',
              title: '选项值',
              type: 'textarea',
              condition: ['type_key', ['select', 'checkbox']],
              placeholder: 'form.developEntryFields.options'
            },
            {
              name: 'memo',
              label: 'form.developEntryFields.memo',
              title: '备注',
              type: 'textarea',
              placeholder: 'form.developEntryFields.memo'
            },
            {
              name: 'status',
              label: 'form.developEntryFields.status',
              title: '状态',
              type: 'switch'
            }
          ]
        },
        redirect: '',
        wait: 3,
        status: 'success'
      }
    }
  },
  {
    url: '/api/develop/entry/fields',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'success',
        data: [
          {
            id: '1',
            name: '应用名称',
            label: 'settings.basic.appName',
            type: '文本框',
            type_key: 'input',
            type_label: 'field.input',
            memo: '应用名称',
            sort: 0,
            status: 1
          },
          {
            id: '2',
            name: '应用简称',
            label: 'settings.basic.appShortName',
            type: '文本框',
            type_key: 'input',
            type_label: 'field.input',
            memo: '应用简称',
            sort: 1,
            status: 1
          }
        ],
        total: 1,
        redirect: '',
        wait: 3,
        status: 'success'
      }
    }
  }
]
