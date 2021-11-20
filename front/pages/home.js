import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// 功能组件
import Link from 'next/link'
import Header from '../components/Header'
import Author from '../components/Author'
import Footer from '../components/Footer'
import HomeTitle from '../components/HomeTitle'
import BackToTop from '../components/BackToTop'
// UI组件
import { Col, List, Row, Tabs } from 'antd'
import { CalendarTwoTone, FireTwoTone, FolderOpenTwoTone } from '@ant-design/icons'
import s from '@sp/home.module.scss'
import bubbly from '@utils/bubbly-bg'
import Image from 'next/image'
// 状态管理
import { ScrollContext } from 'front/store/ContextManage'

const Home = (props) => {
  const { list, verse } = props
  const [myList] = useState(list.data)
  const { TabPane } = Tabs
  const [distance, setDistance] = useState(0)

  function callback (key) {
    console.log(key)
  }

  // 收集滚动高度
  useEffect(() => {
    const fn = () => {
      setDistance(document.documentElement.scrollTop)
    }
    bubbly({
      colorStart: '#fff4e6',
      colorStop: '#ffe9e4',
      blur: 1,
      compose: 'source-over',
      bubbleFunc: () => `hsla(${Math.random() * 50}, 100%, 50%, .3)`
    })
    window.addEventListener('scroll', fn)
    return () => {
      window.removeEventListener('scroll', fn)
    }
  }, [])

  return (
    <div className={s.mainContainer}>
      {/* 通用头部 */}
      <ScrollContext.Provider value={distance}>
        <Header/>
      </ScrollContext.Provider>
      <HomeTitle verse={verse}/>
      {/* 中间内容区 */}
      <Row className={s.contentContainer} type="flex" justify="center">
        {/* 左侧文章列表 */}
        <Col className={s.commLeft} xs={24} sm={24} md={24} lg={18} xl={14}>
          <Tabs defaultActiveKey="1" onChange={callback} animated={true}>
            <TabPane tab={<span className={s.recommendType}>最新</span>} key="1">
              <List
                itemLayout="vertical"
                dataSource={myList}
                split={false}
                renderItem={item => (
                  <List.Item className={s.listItem}>
                    <div className={s.left}>
                      <Image src="/images/1.jpg" layout="fixed" width={300} height={170}/>
                    </div>
                    <div className={s.right}>
                      <div className={s.listTitle}>
                        <Link href={{ pathname: '/detailed', query: { id: item.id } }}>
                          <a>{item.title.length > 50 ? item.title.substring(0, 50) + '...' : item.title}</a>
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
                      <Link href={{ pathname: '/detailed', query: { id: item.id } }}>
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
        {/* 右侧个人介绍区 */}
        <Col className="comm-right" xs={0} sm={0} md={0} lg={0} xl={6}>
          <Author/>
        </Col>
      </Row>
      {/* 通用脚部 */}
      <Footer/>
      <ScrollContext.Provider value={distance}>
        <BackToTop/>
      </ScrollContext.Provider>
    </div>
  )
}
Home.propTypes = {
  list: PropTypes.any,
  verse: PropTypes.any
}
Home.defaultProps = {
  list: {
    data: []
  },
  verse: {}
}
export default Home
