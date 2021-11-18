import s from '@sc/HomeTitle.module.scss'
import PropTypes from 'prop-types'

const HomeTitle = (props) => {
  const { verse } = props
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
HomeTitle.propTypes = {
  list: PropTypes.any,
  verse: PropTypes.any
}
export default HomeTitle
