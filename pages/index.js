import App from './app.js'
import { Provider } from 'react-redux'
import store from '../store'
import { Container } from 'next/app'
// 数据传输
import axios from 'axios'
import servicePath from '../config/apiUrl'

const AppWrapper = (list) => {
  return (
      <Container>
          <Provider store={store}>
              <App list={list}/>
          </Provider>
      </Container>
  )
}
AppWrapper.getInitialProps = async () => {
  const promise = new Promise((resolve) => {
    axios(servicePath.getArticleList).then(
      (res) => {
        resolve(res.data)
      }
    )
  })
  return await promise
}
export default AppWrapper
