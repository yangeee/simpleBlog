import React, { useEffect, useState } from 'react'
import Router from 'next/router'
import axios from 'axios'
import servicePath from '../config/apiUrl'

import s from '@sc/Header.module.scss'
import { Col, Row } from 'antd'
import { HomeTwoTone } from '@ant-design/icons'

const Header = () => {
  const [navArray, setNavArray] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(servicePath.getTypeInfo).then(
        (res) => {
          setNavArray(res.data.data)
          return res.data.data
        }
      )
      setNavArray(result)
    }
    fetchData()
  }, [])

  // 跳转到列表页
  const handleClick = (e) => {
    if (e.key === 0) {
      Router.push('/')
    } else {
      Router.push('/list?id=' + e.key)
    }
  }

  return (
    <div className={s.header}>
      <Row type="flex" justify="center" align="middle">
        <Col xs={24} sm={24} md={4} lg={4} xl={4} className={s.headerTitle}>
          <span className={s.headerText}>桃李不言，下自成蹊</span>
          <span key={0} onClick={handleClick}><HomeTwoTone twoToneColor="#eb2f96" className={s.icon}/></span>
        </Col>
        <Col xs={0} sm={0} md={14} lg={14} xl={14}>
          {
            navArray.map((item, index) => {
              return (
                <span key={index + 1} className={s.category}>{item.typeName}</span>
              )
            })
          }
        </Col>
      </Row>
    </div>
  )
}

export default Header
