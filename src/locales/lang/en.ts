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
        entries: 'Set Entries',
        entryFields: 'Entry Fields',
        models: 'Models',
        modelFields: 'Model Fields',
        menus: 'Menus'
      },
      logs: 'Logs'
    }
  },
  user: {
    center: 'User Center',
    profile: 'Profile',
    password: 'Change Password'
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
      avatar: 'Avatar',
      realname: 'Real Name',
      mobile: 'Mobile Number',
      email: 'E-mail',
      memo: 'Memo',
      status: 'Status'
    },
    developEntries: {
      model: 'Entry',
      name: 'Entry Name',
      label: 'Language Tag',
      memo: 'Memo',
      status: 'Status'
    },
    developEntriesFields: {
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
    developModels: {
      model: 'Model',
      name: 'Model Name',
      label: 'Language Tag',
      memo: 'Memo',
      languageMethod: 'Language method',
      async: 'Async Enable',
      status: 'Status'
    },
    developModelsFields: {
      model: 'Model Fields',
      name: 'Field Name',
      label: 'Language Tag',
      field: 'Bound Field',
      type: 'Field Type',
      cols: 'Grid Columns',
      defaultValue: 'Default Value',
      numerical: 'Is Numerical',
      async: 'Async Enable',
      url: 'External URL',
      options: 'Options',
      list: 'List Display',
      listWidth: 'List Width',
      listCustom: 'List Custom Render',
      search: 'Search Enable',
      edit: 'Edit Enable',
      memo: 'Memo',
      status: 'Status'
    },
    developMenus: {
      model: 'Menu',
      name: 'Menu Name',
      label: 'Language Tag',
      icon: 'Icon',
      parent: 'Parent Menu',
      path: 'Access Path',
      memo: 'Memo',
      status: 'Status'
    },
    logs: {
      model: 'Log',
      type: 'Operation Type',
      username: 'Username',
      content: 'Operation Description'
    },
    userPassword: {
      model: 'Change Password',
      opassword: 'Old Password',
      password: 'New Password',
      cpassword: 'Confirm Password'
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
    saveChanges: 'Save Changes',
    custom: 'Custom Actions',
    permissSet: 'Permission Settings',
    fieldsSet: 'Fields Settings',
    closeOther: 'Close Other',
    closeAll: 'Close All',
    refreshPage: 'Refresh Page'
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
  model: {
    roles: 'Permission Role',
    rules: 'Permission Rule',
    users: 'User',
    logs: 'Logs',
    entries: 'Set Entries'
  },
  message: {
    confirmTitle: 'Confirmation Prompt',
    deleteConfirm: 'Do you really want to delete this record?',
    password: {
      opassword: 'Place Enter Your Old Password',
      password: 'Place Enter Your New Password',
      cpassword: 'Place Confirm Your Password',
      match: "The New Password Can't Match The Old Passowrd",
      notMatch: "Two Inputs Don't Match",
      saveSuccess: 'Successfully saved user password changes'
    },
    profile: {
      saveSuccess: 'Successfully saved user information changes'
    }
  },
  locales: {
    zhCn: 'Simplified Chinese',
    zhTw: 'Traditional Chinese',
    en: 'English'
  },
  languageMethod: {
    tagging: 'Tagging',
    database: 'Database Storage'
  },
  time: {
    createTime: 'Create Time',
    updateTime: 'Update Time',
    deleteTime: 'Delete Time'
  },
  dashboard: {
    dayUsers: 'Daily active users',
    monthUsers: 'Monthly active users',
    upv: 'Website UV/PV',
    ips: 'Website IP',
    trends: 'Website Access Trends',
    source: 'Website Access Source',
    browsers: 'Top 10 Browsers',
    keywords: 'Top 10 Search Keywords',
    terminal: 'Terminal Distribution'
  },
  chart: {
    loading: 'The Chart is Loading...'
  },
  tipExample: 'Here is an example tip',
  lastLoginTime: 'Last Login Time',
  lastLoginIp: 'Last Login Ip',
  operations: 'Operations',
  loading: 'Now Loading...',
  dataEmpty: 'No Data',
  notSupported: 'Not Supported',
  login: 'Login',
  logout: 'Logout',
  getPasswd: 'Find Password',
  back: 'Back',
  copyright: 'Copyright © 2019-2025 小白fate'
}
