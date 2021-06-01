import {Avatar,Divider} from 'antd'
import s from '../public/static/style/components/Author.module.css'
import { CalendarOutlined , FolderAddOutlined, FireOutlined} from '@ant-design/icons'

const Author =()=>{

    return (
        <div className={s.authorDiv}>
            <div> <Avatar size={100} src="https://ftp.bmp.ovh/imgs/2021/03/d0404e15a98e7e6e.jpg"  /></div>
            <div className={s.authorIntroduction}>
                222222222222
                <Divider>社交账号</Divider>
                <Avatar size={28}  className="account"  />
                <Avatar size={28}  className="account" />
                <Avatar size={28}  className="account"   />
            </div>
        </div>
    )

}

export default Author