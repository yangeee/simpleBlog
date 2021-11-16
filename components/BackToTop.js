import s from '@sc/BackToTop.module.scss'
import { VerticalAlignTopOutlined } from '@ant-design/icons'
// 状态管理
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

const BackToTop = () => {
  const { distance } = useSelector(state => state.scroll) // 从入口里面拿scroll这个reducer的state
  const [scrollState, setScrollState] = useState(false)

  useEffect(() => {
    if (distance > 100) {
      setScrollState(true)
    } else {
      setScrollState(false)
    }
  }, [distance])
  return (
        <div className={[s.icon, scrollState ? s.scrollState : null].join(' ')} onClick={handleClick}>
            <VerticalAlignTopOutlined/>
        </div>
  )
}

function handleClick () {

}

export default BackToTop
