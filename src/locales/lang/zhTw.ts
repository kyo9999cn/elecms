export default {
  menu: {
    dashboard: '工作臺',
    system: {
      main: '系統設置',
      settings: {
        main: '基本設置',
        website: '網站設置'
      },
      permiss: {
        main: '權限管理',
        roles: '角色',
        rules: '規則'
      },
      users: '用戶管理',
      develop: {
        main: '系統開發',
        entries: '設置項',
        entryFields: '字段設置',
        models: '模型管理',
        modelFields: '字段設置',
        menus: '系統菜單'
      },
      logs: '系統日誌'
    }
  },
  user: {
    center: '用戶中心',
    profile: '個人資料',
    password: '修改密碼'
  },
  settings: {
    basic: {
      appName: '應用名稱',
      appShortName: '應用簡稱',
      appLogo: '應用Logo',
      description: '應用描述',
      logEnable: '日誌開關'
    },
    website: {
      siteName: '網站名稱',
      siteShutdown: '關閉網站',
      shutdownReason: '關閉原因',
      seoSettings: 'SEO設置',
      title: '網站標題',
      keywords: '網站關鍵詞',
      description: '網站描述'
    }
  },
  form: {
    permissRules: {
      model: '權限規則',
      name: '權限名稱',
      label: '多語言標籤',
      code: '權限標識',
      memo: '備註',
      status: '狀態'
    },
    permissRoles: {
      model: '角色',
      name: '角色名稱',
      label: '多語言標籤',
      memo: '備註',
      status: '狀態',
      permissSet: '權限設置',
      set: '設置權限'
    },
    users: {
      model: '用戶',
      username: '用戶名',
      password: '密碼',
      role: '用戶角色',
      avatar: '頭像',
      realname: '真實姓名',
      mobile: '手機號碼',
      email: '電子郵箱',
      memo: '備註',
      status: '狀態'
    },
    developEntries: {
      model: '設置項',
      name: '設置項',
      label: '多語言標籤',
      memo: '備註',
      status: '狀態'
    },
    developEntriesFields: {
      model: '設置項字段',
      name: '字段名稱',
      label: '多語言標籤',
      type: '字段類型',
      defaultValue: '默認值',
      numerical: '是否數字型',
      async: '開啓異步',
      url: '調用地址',
      options: '選項值',
      memo: '備註',
      status: '狀態'
    },
    developModels: {
      model: '模型',
      name: '模型名稱',
      label: '多語言標籤',
      memo: '備註',
      status: '狀態',
      languageMethod: '多語言方式',
      async: '開啓異步'
    },
    developModelsFields: {
      model: '模型字段',
      name: '字段名稱',
      label: '多語言標籤',
      field: '綁定字段',
      type: '字段類型',
      cols: '柵格列數',
      defaultValue: '默認值',
      numerical: '是否數字型',
      async: '開啓異步',
      url: '調用地址',
      options: '選項值',
      list: '列表顯示',
      listWidth: '列表寬度',
      listCustom: '列表自設',
      search: '可檢索',
      edit: '可修改',
      memo: '備註',
      status: '狀態'
    },
    developMenus: {
      model: '菜單',
      name: '字段名稱',
      label: '多語言標籤',
      icon: '圖標',
      parent: '上級菜單',
      jump: '跳轉鏈接',
      path: '訪問地址',
      memo: '備註',
      status: '狀態'
    },
    logs: {
      model: '系統日誌',
      type: '操作類型',
      username: '用戶名',
      content: '操作內容'
    },
    userPassword: {
      model: '修改密碼',
      opassword: '原密碼',
      password: '新密碼',
      cpassword: '確認密碼'
    }
  },
  actions: {
    main: '操作',
    name: '操作名稱',
    event: '操作動作',
    label: '語言標籤',
    all: '全部',
    detail: '詳情',
    search: '檢索',
    add: '新建',
    edit: '修改',
    delete: '刪除',
    multDelete: '批量刪除',
    import: '導入',
    export: '導出',
    print: '打印',
    cancel: '取消',
    reset: '重置',
    submit: '提交',
    save: '保存',
    sort: '排序',
    saveSettings: '保存設置',
    saveChanges: '保存修改',
    custom: '自設操作',
    permissSet: '權限設置',
    fieldsSet: '字段設置',
    closeOther: '關閉其他',
    closeAll: '關閉全部',
    refreshPage: '刷新當前頁'
  },
  field: {
    input: '文本框',
    textarea: '文本域',
    number: '數字框',
    select: '下拉選項',
    password: '密碼框',
    radio: '單選框',
    checkbox: '多選框',
    image: '圖片上傳',
    audio: '視頻上傳',
    video: '音頻上傳',
    file: '文件上傳',
    switch: '開關',
    richtext: '富文本編輯器'
  },
  model: {
    roles: '權限角色',
    rules: '權限規則',
    users: '用戶',
    logs: '系統日誌',
    entries: '設置項'
  },
  message: {
    confirmTitle: '操作確認',
    deleteConfirm: '您確定要刪除數據嗎?',
    password: {
      opassword: '請輸入原密碼',
      password: '請輸入新密碼',
      cpassword: '請輸入確認密碼',
      match: '新密碼不能和原密碼一致',
      notMatch: '確認密碼和新密碼不一致',
      saveSuccess: '修改密碼成功'
    },
    profile: {
      saveSuccess: '修改個人信息成功'
    }
  },
  locales: {
    zhCn: '簡體中文',
    zhTw: '繁體中文',
    en: '英文'
  },
  languageMethod: {
    tagging: '標籤',
    database: '數據庫存儲'
  },
  time: {
    createTime: '創建時間',
    updateTime: '修改時間',
    deleteTime: '刪除時間'
  },
  dashboard: {
    dayUsers: '日活躍用戶數量',
    monthUsers: '月活躍用戶數量',
    upv: '網站 UV/PV',
    ips: '網站 IP',
    trends: '訪問趨勢',
    source: '來源分析',
    browsers: '瀏覽器Top 10',
    keywords: '關鍵詞Top 10',
    terminal: '終端分佈'
  },
  chart: {
    loading: '圖表正在加載中...'
  },
  tipExample: '這裏是示例提示',
  lastLoginTime: '最後登錄時間',
  lastLoginIp: '最後登錄Ip',
  operations: '操作',
  loading: '加載中...',
  dataEmpty: '暫無數據',
  notSupported: '操作不支持',
  login: '登錄',
  logout: '退出系統',
  getPasswd: '找回密碼',
  back: '返回',
  copyright: 'Copyright © 2019-2025 小白fate'
}
