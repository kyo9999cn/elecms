import NProgress from 'nprogress'
import router from '@/router'
import { useUserStore } from '@/store/modules/user'
import whiteList from './whiteList'
import 'nprogress/nprogress.css'

NProgress.configure({ easing: 'ease', speed: 300, showSpinner: false })

router.beforeEach(async (to: any) => {
  NProgress.start()
  const { token } = useUserStore()

  if (whiteList.includes(to.name)) {
    return true
  }

  if (!token) {
    return {
      name: 'login',
      query: {
        redirect: to.fullPath
      },
      replace: true
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
