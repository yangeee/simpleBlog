import s from '@sc/Author.module.scss'
import { GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons'
import React from 'react'
import { Popover } from 'antd'
import Image from 'next/image'
import { getTimeState } from '@utils/utils'

const Author = () => {
  const wechat = (
    <div className={s.qrCode}>
      <Image src="/images/wechat.png" alt="" width={150} height={150}/>
    </div>
  )
  const qq = (
    <div className={s.qrCode}>
      <Image src="/images/qq.jpg" alt="" width={150} height={150}/>
    </div>
  )
  return (
    <div className={s.authorContainer}>
      <div className={s.authorDiv}>
        <div className={s.blogCardText}>
          {getTimeState()}好呀<br/>
          我是<span className={s.color}> 止水</span><br/>
          欢迎来到<br/>
          我的<span className={s.color}> 秘密基地</span>
        </div>
        <div className={s.blogCardImg}>
          <Image src="/images/touxiang.png" alt="" width={130} height={187}/>
        </div>
      </div>
      <div className={s.socialCard}>
        <div className={s.text}>桃李不言，下自成蹊</div>
        <div className={s.allIcon}>
          <a href="https://github.com/yangeee" className={s.authorHref}><GithubOutlined className={s.icon}/></a>
          <Popover content={wechat} color={'#8cc8ff'} overlayClassName="popoverConfig">
            <a className={[s.authorHref, s.wechat].join(' ')}><WechatOutlined className={s.icon}/></a>
          </Popover>
          <Popover content={qq} color={'#8cc8ff'} overlayClassName="popoverConfig">
            <a className={s.authorHref}><QqOutlined className={s.icon}/></a>
          </Popover>
        </div>
      </div>
    </div>
  )
}
export default Author
