import Home from './home.js'
// 数据传输
import axios from 'axios'
import servicePath from '../config/apiUrl'

const App = (list) => {
  return (
    <Home list={list}/>
  )
}

export async function getServerSideProps (context) {
  const promise = new Promise((resolve) => {
    axios(servicePath.getArticleList).then(
      (res) => {
        resolve(res.data)
      }
    )
  })
  const list = await promise
  return {
    props: {
      list
    } // will be passed to the page component as props
  }
}

export default App
