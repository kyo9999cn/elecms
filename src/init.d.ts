declare module '*.vue' {
  import { DefineComponent } from 'vue'

  const Component: DefineComponent<{}, {}, any>
  export default Component
}

declare module 'js-cookie'
