import React, {useState} from 'react'
// 功能组件
import Link from 'next/link'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
// UI组件
import {Row, Col, List} from 'antd'
import { CalendarTwoTone , FolderOpenTwoTone, FireTwoTone} from '@ant-design/icons'
import '../public/static/style/pages/index.css'
// 数据传输
import axios from "axios"
import  servicePath  from '../config/apiUrl'

const Home = (list) => {
    const [myList, setMyList] = useState(
        list.data
    )
    return(
        <div>
            <Header />
            <Row className="comm-main" type="flex" justify="center">
                <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
                    <List
                        header={<div>最新日志</div>}
                        itemLayout="vertical"
                        dataSource={myList}
                        renderItem={item=>(
                            <List.Item>
                                <div className="list-title">
                                    <Link href={{pathname:'/detailed', query: {id:item.id}}}>
                                        <a>{item.title}</a>
                                    </Link>
                                </div>
                                <div className="list-icon">
                                    <span><CalendarTwoTone />{item.addTime}</span>
                                    <span><FolderOpenTwoTone />  {item.typeName}</span>
                                    <span><FireTwoTone /> {item.view_count}人</span>
                                </div>
                                <div className="list-context">{item.introduce}</div>
                            </List.Item>
                        )}
                    />
                </Col>

                <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                    <Author />
                    <Advert />
                </Col>
            </Row>
            <Footer />
        </div>
    )
}
Home.getInitialProps = async ()=>{
    const promise = new Promise((resolve)=>{
        axios(servicePath.getArticleList).then(
            (res)=>{
                //console.log('远程获取数据结果:',res.data.data)
                resolve(res.data)
            }
        )
    })

    return await promise
}
export default Home
