import s from '@sc/BackToTop.module.scss'
import { VerticalAlignTopOutlined } from '@ant-design/icons'
// 状态管理
import { useStore } from '../store/index'
import { useEffect, useState } from 'react'

const BackToTop = () => {
  const [scrollState, setScrollState] = useState(false)
  const [state] = useStore()

  useEffect(() => {
    if (state.distance > 100) {
      setScrollState(true)
    } else {
      setScrollState(false)
    }
  }, [state.distance])
  return (
    <div className={[s.icon, scrollState ? s.scrollState : null].join(' ')} onClick={handleClick}>
      <VerticalAlignTopOutlined/>
    </div>
  )
}

function handleClick () {

}

export default BackToTop
