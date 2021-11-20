import s from '@sc/footer.module.scss'
import React from 'react'

const Footer = () => {
  return (
    <div className={s.footer}>
      <div>Copyright © <span style={{ color: '#67b0fc' }}>简单男孩</span></div>
      <div>
        ICP证：<a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">粤ICP备2021071273号</a>
      </div>
      <div>Drive By
        <span className={s.drive}> React </span> &
        <span className={s.drive}> Next </span> &
        <span className={s.drive}> Egg </span> &
        <span className={s.drive}> Redux </span> &
        <span className={s.drive}> Ant Design </span> &
        <span className={s.drive}> Mysql </span> &
        <span className={s.drive}> Jenkins </span> &
        <span className={s.drive}> AliYun </span> &
        <span className={s.drive}> WebStorm </span> &
        <span className={s.drive}> ❤ </span>
      </div>
    </div>
  )
}

export default Footer
