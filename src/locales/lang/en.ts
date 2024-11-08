export default {
  menu: {
    dashboard: 'Dashboard',
    system: {
      main: 'Settings',
      settings: {
        main: 'Basic Settings',
        website: 'Website Settings'
      },
      permiss: {
        main: 'Permission',
        roles: 'Roles',
        rules: 'Rules'
      },
      users: 'Users',
      develop: {
        main: 'Develop',
        entry: 'Entry',
        entryFields: 'Entry Fields',
        models: 'Models',
        menus: 'Menus'
      },
      logs: 'Logs'
    }
  },
  settings: {
    basic: {
      appName: 'Application Name',
      appShortName: 'Application ShortName',
      appLogo: 'Application Logo',
      description: 'Application Description',
      logEnable: 'Log Enable'
    },
    website: {
      siteName: 'Site Name',
      siteShutdown: 'Site Shutdown',
      shutdownReason: 'Shutdown Reason',
      seoSettings: 'SEO Settings',
      title: 'Title',
      keywords: 'Keywords',
      description: 'Description'
    }
  },
  form: {
    permissRules: {
      model: 'Permission Rule',
      name: 'Permission Name',
      label: 'Language Tag',
      code: 'Code',
      memo: 'Memo',
      status: 'Status'
    },
    permissRoles: {
      model: 'Role',
      name: 'Role Name',
      label: 'Language Tag',
      memo: 'Memo',
      status: 'Status',
      permissSet: 'Permission Settings',
      set: 'Set Permission'
    },
    users: {
      model: 'User',
      username: 'Username',
      password: 'Password',
      role: 'User Role',
      realname: 'Real Name',
      mobile: 'Mobile Number',
      email: 'E-mail',
      memo: 'Memo',
      status: 'Status'
    },
    developEntry: {
      model: 'Entry',
      name: 'Entry Name',
      label: 'Language Tag',
      memo: 'Memo',
      status: 'Status'
    },
    developEntryFields: {
      model: 'Entry Fields',
      name: 'Field Name',
      label: 'Language Tag',
      type: 'Field Type',
      defaultValue: 'Default Value',
      numerical: 'Is Numerical',
      async: 'Async Enable',
      url: 'External URL',
      options: 'Options',
      memo: 'Memo',
      status: 'Status'
    },
    logs: {
      model: 'Log',
      type: 'Operation Type',
      username: 'Username',
      content: 'Operation Description'
    }
  },
  actions: {
    main: 'Actions',
    name: 'Action Name',
    event: 'Action Event',
    label: 'Action Label',
    all: 'All',
    detail: 'Detail',
    search: 'Search',
    add: 'Add New',
    edit: 'Edit',
    delete: 'Delete',
    multDelete: 'MultiSelect Delete',
    import: 'Import',
    export: 'Export',
    print: 'Print',
    cancel: 'Cancel',
    reset: 'Reset',
    submit: 'Submit',
    save: 'Save',
    sort: 'Sort',
    saveSettings: 'Save Settings',
    custom: 'Custom Actions',
    permissSet: 'Permission Settings',
    fieldsSet: 'Fields Settings'
  },
  field: {
    input: 'Text',
    textarea: 'TextArea',
    number: 'Number',
    select: 'Select',
    password: 'Password',
    radio: 'Radio',
    checkbox: 'Checkbox',
    image: 'Image',
    audio: 'Audio',
    video: 'Video',
    file: 'File',
    switch: 'Switch',
    richtext: 'Rich Text'
  },
  message: {
    confirmTitle: 'Confirmation Prompt',
    deleteConfirm: 'Do you really want to delete this record?'
  },
  locales: {
    zhCn: 'Simplified Chinese',
    zhTw: 'Traditional Chinese',
    en: 'English'
  },
  time: {
    createTime: 'Create Time',
    updateTime: 'Update Time',
    deleteTime: 'Delete Time'
  },
  tipExample: 'Here is an example tip',
  lastLoginTime: 'Last Login Time',
  lastLoginIp: 'Last Login Ip',
  operations: 'Operations',
  loading: 'Now Loading...',
  dataEmpty: 'No Data',
  login: 'Login',
  logout: 'Logout',
  back: 'Back',
  copyright: 'Copyright © 2019-2025 小白fate'
}
