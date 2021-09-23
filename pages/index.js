import React, {useState} from 'react'
// 功能组件
import Link from 'next/link'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
// UI组件
import {Row, Col, List, Tabs} from 'antd'
import {CalendarTwoTone, FolderOpenTwoTone, FireTwoTone} from '@ant-design/icons'
import s from '@sp/index.module.scss'
// 数据传输
import axios from "axios"
import servicePath from '../config/apiUrl'
import Image from 'next/image'

const Home = (list) => {
  const [myList, setMyList] = useState(
    list.data
  )

  const {TabPane} = Tabs

  function callback(key) {
    console.log(key);
  }

  return (
    <div className={s.mainContainer}>
      {/*通用头部*/}
      <Header/>
      {/*中间内容区*/}
      <Row className={s.contentContainer} type="flex" justify="center">
        {/*左侧文章列表*/}
        <Col className={s.commLeft} xs={24} sm={24} md={16} lg={18} xl={14}>
          <Tabs defaultActiveKey="1" onChange={callback} animated={true}>
            <TabPane tab={<span className={s.recommendType}>最新</span>} key="1">
              <List
                itemLayout="vertical"
                dataSource={myList}
                split={false}
                renderItem={item => (
                  <List.Item className={s.listItem}>
                    <div className={s.left}>
                        <Image src='/images/1.jpg' width={300} height={170}/>
                    </div>
                    <div className={s.right}>
                      <div className={s.listTitle}>
                        <Link href={{pathname: '/detailed', query: {id: item.id}}}>
                          <a>{item.title}</a>
                        </Link>
                      </div>
                      <div className={s.listIcon}>
                        <span><CalendarTwoTone/>{item.addTime}</span>
                        <span><FolderOpenTwoTone/> {item.typeName}</span>
                        <span><FireTwoTone/> {item.view_count}人</span>
                      </div>
                      <div className={s.listContext}>{item.introduce}</div>
                    </div>
                  </List.Item>
                )}
              />
            </TabPane>
            <TabPane tab={<span className={s.recommendType}>热门</span>} key="2">
              <List
                itemLayout="vertical"
                dataSource={myList}
                split={false}
                renderItem={item => (
                  <List.Item className={s.listItem}>
                    <div className={s.listTitle}>
                      <Link href={{pathname: '/detailed', query: {id: item.id}}}>
                        <a>{item.title}</a>
                      </Link>
                    </div>
                    <div className={s.listIcon}>
                      <span><CalendarTwoTone/>{item.addTime}</span>
                      <span><FolderOpenTwoTone/> {item.typeName}</span>
                      <span><FireTwoTone/> {item.view_count}人</span>
                    </div>
                    <div className={s.listContext}>{item.introduce}</div>
                  </List.Item>
                )}
              />
            </TabPane>
          </Tabs>
        </Col>
        {/*右侧头像区*/}
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author/>
          <Advert/>
        </Col>
      </Row>
      {/*通用脚部*/}
      <Footer/>
    </div>
  )
}
Home.getInitialProps = async () => {
  const promise = new Promise((resolve) => {
    axios(servicePath.getArticleList).then(
      (res) => {
        //console.log('远程获取数据结果:',res.data.data)
        resolve(res.data)
      }
    )
  })

  return await promise
}
export default Home
