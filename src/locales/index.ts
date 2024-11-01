import zhCn from 'element-plus/es/locale/lang/zh-cn'
import zhTw from 'element-plus/es/locale/lang/zh-tw'
import en from 'element-plus/es/locale/lang/en'
import { flattenObject } from '@/utils/object'

// 封装Element多语言
const ElLocale: any = {
  zhCn,
  zhTw,
  en
}

// 动态引入应用多语言设置
const EleLocale: any = {}

interface LangType {
  default: {}
}
const langs = import.meta.glob<LangType>('./lang/*.ts', {
  eager: true
})

Object.keys(langs).forEach((key) => {
  const match: any = key.match(/(.*\/)*([^.]+).*/)
  const name = match && match.length > 0 ? match[match.length - 1] : key
  EleLocale[name] = flattenObject(langs[key].default)
})

// 获取语言标签值
const getLang = (label: string, title: string, lang = 'zhCn') => {
  return EleLocale[lang] && EleLocale[lang] && EleLocale[lang][label]
    ? EleLocale[lang][label]
    : title
}

export { ElLocale, EleLocale, getLang }
