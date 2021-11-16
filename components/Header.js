import React, { useEffect, useState } from 'react'
import Router from 'next/router'
import axios from 'axios'
import servicePath from '../config/apiUrl'

import s from '@sc/Header.module.scss'
import { Col, Row } from 'antd'
import { HomeTwoTone } from '@ant-design/icons'

const Header = () => {
  const [navArray, setNavArray] = useState([])
  const [scrollState, setScrollState] = useState(false)

  useEffect(() => {
    fetchData()
    addScrollClass()
  }, [])

  return (
    <div className={[s.header, scrollState ? s.scrollState : null].join(' ')}>
      <Row type="flex" justify="center" align="middle" className={`${s.row}`}>
        <Col xs={24} sm={24} md={4} lg={4} xl={4} className={`${s.headerTitle}`}>
          <div key={0} onClick={handleClick}>
            <HomeTwoTone twoToneColor="#eb2f96" className={`${s.icon} ${s.hover}`}/>
          </div>
        </Col>
        <Col xs={0} sm={0} md={14} lg={14} xl={14}>
          {
            navArray.map((item, index) => {
              return (
                <span key={index + 1} className={[s.category, s.hover].join(' ')}>{item.typeName}</span>
              )
            })
          }
        </Col>
      </Row>
    </div>
  )

  // 滚动改变头部样式
  function addScrollClass () {
    window.addEventListener('scroll', () => {
      const scrollTop = document.documentElement.scrollTop
      if (scrollTop > 100) {
        setScrollState(true)
      } else {
        setScrollState(false)
      }
    })
  }

  async function fetchData () {
    await axios(servicePath.getTypeInfo).then(
      (res) => {
        setNavArray(res.data.data)
      }
    )
  }

  // 跳转到列表页
  function handleClick (e) {
    if (e.key === 0) {
      Router.push('/')
    } else {
      Router.push('/list?id=' + e.key)
    }
  }
}

export default Header
