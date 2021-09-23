import {Avatar, Divider} from 'antd'
import s from '@sc/Author.module.scss'
import {GithubOutlined, WechatOutlined, QqOutlined} from '@ant-design/icons';

const Author = () => {

    return (
        <div className={s.authorDiv}>
            <div><Avatar size={100} src="https://ftp.bmp.ovh/imgs/2021/03/d0404e15a98e7e6e.jpg"/></div>
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