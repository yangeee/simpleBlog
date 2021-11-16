import s from '@sc/HomeTitle.module.scss'
import { verse } from '../config/apiUrl'
import axios from 'axios'
import { useEffect, useState } from 'react'

const HomeTitle = (props) => {
  const [verse, setVerse] = useState({})
  useEffect(async () => {
    const obj = await getVerse()
    setVerse(obj)
  }, [])

  return (
    <div className={s.homeTitle}>
      <div className={s.wrapper}>
        <div className={s.title}>简单男孩のblog</div>
        <div className={s.verse}>{verse.content}</div>
        <div className={s.verseFrom}>
          <span>{verse.author}《{verse.origin}》</span>
        </div>
      </div>
    </div>
  )
}

function getVerse () {
  return new Promise(resolve => {
    axios(verse.all).then(
      (res) => {
        resolve(res.data)
      }
    )
  })
}

export default HomeTitle
