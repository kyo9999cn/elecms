export default [
  {
    url: '/api/develop/models/fields/model',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'success',
        data: {
          name: 'modelFields',
          label: 'form.developModelsFields.model',
          title: '模型字段',
          columns: [
            {
              key: 'name',
              dataKey: 'name',
              title: '字段名称',
              label: 'form.developModelsFields.name',
              langKey: 'label',
              width: 220
            },
            {
              key: 'type',
              dataKey: 'type',
              title: '类型',
              label: 'form.developModelsFields.type',
              langKey: 'type_label',
              width: 160
            },
            {
              key: 'memo',
              dataKey: 'memo',
              title: '备注',
              label: 'form.developModelsFields.memo'
            },
            {
              key: 'status',
              dataKey: 'status',
              title: '状态',
              label: 'form.developModelsFields.status',
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
              label: 'form.developModelsFields.name',
              type: 'input',
              placeholder: 'form.developModelsFields.name'
            }
          ],
          fields: [
            {
              name: 'name',
              label: 'form.developModelsFields.name',
              title: '字段名称',
              type: 'input',
              placeholder: 'form.developModelsFields.name'
            },
            {
              name: 'label',
              label: 'form.developModelsFields.label',
              title: '多语言标签',
              type: 'input',
              placeholder: 'form.developModelsFields.label'
            },
            {
              name: 'field',
              label: 'form.developModelsFields.field',
              title: '绑定字段',
              type: 'input',
              placeholder: 'form.developModelsFields.field'
            },
            {
              name: 'type_key',
              label: 'form.developModelsFields.type',
              title: '字段类型',
              type: 'select',
              placeholder: 'form.developModelsFields.type',
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
              name: 'cols',
              label: 'form.developModelsFields.cols',
              title: '栅格列数',
              type: 'number',
              min: 1,
              max: 24,
              placeholder: 'form.developModelsFields.cols'
            },
            {
              name: 'default_value',
              label: 'form.developModelsFields.defaultValue',
              title: '默认值',
              type: 'input',
              placeholder: 'form.developModelsFields.defaultValue'
            },
            {
              name: 'is_numerical',
              label: 'form.developModelsFields.numerical',
              title: '是否数值型',
              type: 'switch'
            },
            {
              name: 'is_async',
              label: 'form.developModelsFields.async',
              title: '开启异步',
              type: 'switch'
            },
            {
              name: 'url',
              label: 'form.developModelsFields.url',
              title: '调用地址',
              type: 'input',
              condition: ['is_async', 1],
              placeholder: 'form.developModelsFields.url'
            },
            {
              name: 'is_list',
              label: 'form.developModelsFields.list',
              title: '列表显示',
              type: 'switch'
            },
            {
              name: 'list_width',
              label: 'form.developModelsFields.listWidth',
              title: '列表宽度',
              type: 'input',
              condition: ['is_list', 1],
              placeholder: 'form.developModelsFields.listWidth'
            },
            {
              name: 'is_list_custom',
              label: 'form.developModelsFields.listCustom',
              title: '列表自定义',
              condition: ['is_list', 1],
              type: 'switch'
            },
            {
              name: 'is_search',
              label: 'form.developModelsFields.search',
              title: '可查询',
              type: 'switch'
            },
            {
              name: 'is_edit',
              label: 'form.developModelsFields.edit',
              title: '可修改',
              type: 'switch'
            },
            {
              name: 'options',
              label: 'form.developModelsFields.options',
              title: '选项值',
              type: 'textarea',
              cols: 24,
              condition: ['type_key', ['select', 'checkbox']],
              placeholder: 'form.developModelsFields.options'
            },
            {
              name: 'memo',
              label: 'form.developModelsFields.memo',
              title: '备注',
              type: 'textarea',
              cols: 24,
              placeholder: 'form.developModelsFields.memo'
            },
            {
              name: 'status',
              label: 'form.developModelsFields.status',
              title: '状态',
              cols: 24,
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
    url: '/api/develop/models/fields',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'success',
        data: [
          {
            id: '1',
            name: '角色名称',
            label: 'form.permissRoles.name',
            field: 'name',
            type: '文本框',
            type_key: 'input',
            type_label: 'field.input',
            memo: '角色名称',
            cols: 24,
            sort: 0,
            status: 1
          },
          {
            id: '2',
            name: '备注',
            label: 'form.permissRoles.memo',
            field: 'memo',
            type: '文本框',
            type_key: 'textarea',
            type_label: 'field.textarea',
            memo: '备注',
            cols: 24,
            sort: 1,
            status: 1
          }
        ],
        total: 2,
        redirect: '',
        wait: 3,
        status: 'success'
      }
    }
  }
]
