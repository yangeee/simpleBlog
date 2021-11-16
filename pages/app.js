import React, { useEffect, useState } from 'react'
// 功能组件
import Link from 'next/link'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import HomeTitle from '../components/HomeTitle'
import BackToTop from '../components/BackToTop'
// UI组件
import { Col, List, Row, Tabs } from 'antd'
import { CalendarTwoTone, FireTwoTone, FolderOpenTwoTone } from '@ant-design/icons'
import s from '@sp/index.module.scss'

import Image from 'next/image'
// 状态管理
import { useDispatch } from 'react-redux'
import { change } from '../store/features/scrollSlice'
// 全局通用方法

const App = (props) => {
  const { list } = props
  const [myList] = useState(list.data)
  const dispatch = useDispatch()
  const { TabPane } = Tabs
  console.log(props)
  function callback (key) {
    console.log(key)
  }
  // 收集滚动高度
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const distance = document.documentElement.scrollTop
      dispatch(change({ distance }))
    })
  }, [])

  return (
              <div className={s.mainContainer}>
                  {/* 通用头部 */}
                  <Header/>
                  <HomeTitle/>
                  {/* 中间内容区 */}
                  <Row className={s.contentContainer} type="flex" justify="center">
                      {/* 左侧文章列表 */}
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
                                                  <Image src="/images/1.jpg" width={300} height={170}/>
                                              </div>
                                              <div className={s.right}>
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
                      <Col className="comm-right" xs={0} sm={0} md={6} lg={6} xl={8}>
                          <Author/>
                          <Advert/>
                      </Col>
                  </Row>
                  {/* 通用脚部 */}
                  <Footer/>
                  <BackToTop/>
              </div>
  )
}
export default App
