import Home from './home.js'
// 数据传输
import axios from 'axios'
import servicePath, { verse } from '../config/apiUrl'
import PropTypes from 'prop-types'

const Index = (props) => {
  return (
    <Home list={props.list} verse={props.verse}/>
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
  const promise2 = new Promise(resolve => {
    axios(verse.all).then(
      (res) => {
        resolve(res.data)
      }
    )
  })
  const verseObj = await promise2
  return {
    props: {
      list,
      verse: verseObj
    } // will be passed to the page component as props
  }
}

Index.propTypes = {
  list: PropTypes.any,
  verse: PropTypes.any
}
export default Index
