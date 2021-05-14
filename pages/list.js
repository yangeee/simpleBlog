import React, {useState, useEffect} from 'react'
import axios from 'axios'
import servicePath from '../config/apiUrl'
import Link from 'next/link'

import {Row, Col, List, Breadcrumb} from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import '../public/static/style/pages/list.css'
import {CalendarTwoTone, FolderOpenTwoTone, FireTwoTone} from '@ant-design/icons'


const ArticleList = (list) => {

    const [myList, setMylist] = useState(list.data)

    useEffect(()=>{
        setMylist(list.data)
    })
    return (
        <>
            <Header/>
            <Row className="comm-main" type="flex" justify="center">
                <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
                    <div>
                        <div className="bread-div">
                            <Breadcrumb>
                                <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                                <Breadcrumb.Item>视频列表</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>

                        <List
                            itemLayout="vertical"
                            dataSource={myList}
                            renderItem={item => (
                                <List.Item>
                                    <div className="list-title">
                                        <Link href={{pathname: '/detailed', query: {id: item.id}}}>
                                            <a>{item.title}</a>
                                        </Link>
                                    </div>
                                    <div className="list-icon">
                                        <span><CalendarTwoTone/> {item.addTime}</span>
                                        <span><FolderOpenTwoTone/> {item.typeName}</span>
                                        <span><FireTwoTone/> {item.view_count}人</span>
                                    </div>
                                    <div className="list-context">{item.introduce}</div>
                                </List.Item>
                            )}
                        />

                    </div>
                </Col>

                <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                    <Author/>
                    <Advert/>
                </Col>
            </Row>
            <Footer/>

        </>
    )

}


ArticleList.getInitialProps = async (context) => {
    let id = context.query.id
    const promise = new Promise((resolve) => {
        axios(servicePath.getListById + id).then(
            (res) => resolve(res.data)
        )
    })
    return await promise
}

export default ArticleList