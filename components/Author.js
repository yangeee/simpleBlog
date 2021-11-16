import { Avatar, Divider } from 'antd'
import s from '@sc/Author.module.scss'
import { GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons'

const Author = () => {
  return (
    <div className={s.authorDiv}>
      <div><Avatar size={100} src="/images/4.jpg"/></div>
      <div className={s.authorIntroduction}>
        <span className={s.span}>simple</span>
        <Divider>社交账号</Divider>
        <a href="https://github.com/yangeee" className={s.authorHref}><GithubOutlined/></a>
        <a href="https://github.com/yangeee" className={s.authorHref}><WechatOutlined/></a>
        <a href="https://github.com/yangeee" className={s.authorHref}><QqOutlined/></a>
      </div>
    </div>
  )
}
export default Author
