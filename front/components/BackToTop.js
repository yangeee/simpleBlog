import s from '@sc/BackToTop.module.scss'
import { VerticalAlignTopOutlined } from '@ant-design/icons'
// 状态管理
import { useContext, useEffect, useState } from 'react'
import { ScrollContext } from 'front/store/ContextManage'
import { easeOut } from '@utils/utils'

const BackToTop = () => {
  const [scrollState, setScrollState] = useState(false)
  const distance = useContext(ScrollContext)

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
  // 当前滚动高度
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  easeOut(scrollTop, 0, 5, function (val) {
    window.scrollTo(0, val)
  })
}

export default BackToTop
