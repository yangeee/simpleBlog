import 'antd/dist/antd.css' // 蚂蚁UI库样式
import '@sp/common.css' // 公共样式
import '../public/static/style/global.scss' // 全局样式
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import PropTypes from 'prop-types'

const App = ({ Component, pageProps }) => {
  const router = useRouter()
  const [state, setState] = useState({
    isRouteChanging: false,
    loadingKey: 0
  })
  useEffect(() => {
    const handleRouteChangeStart = () => {
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: true,
        loadingKey: prevState.loadingKey ^ 1
      }))
    }

    const handleRouteChangeEnd = () => {
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: false
      }))
    }

    router.events.on('routeChangeStart', handleRouteChangeStart)
    router.events.on('routeChangeComplete', handleRouteChangeEnd)
    router.events.on('routeChangeError', handleRouteChangeEnd)

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
      router.events.off('routeChangeComplete', handleRouteChangeEnd)
      router.events.off('routeChangeError', handleRouteChangeEnd)
    }
  }, [router.events])

  return (
        <>
            <Loading isRouteChanging={state.isRouteChanging} key={state.loadingKey} />
            <Component {...pageProps} />
        </>
  )
}
App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any
}
export default App
