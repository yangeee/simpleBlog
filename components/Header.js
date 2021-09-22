import React ,{useState,useEffect} from 'react'
import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import  servicePath  from '../config/apiUrl'

import s from '@sc/Header.module.css'
import {Row, Col, Menu} from 'antd'
import { SmileOutlined , HomeOutlined, YoutubeOutlined} from '@ant-design/icons'

const Header=()=>{
    const [navArray , setNavArray] = useState([])
    useEffect(()=>{
        const fetchData = async ()=>{
            const result= await axios(servicePath.getTypeInfo).then(
                (res)=>{
                    setNavArray(res.data.data)
                    return res.data.data
                }
            )
            setNavArray(result)
        }
        fetchData()
    },[])

    //跳转到列表页
    const handleClick = (e)=>{
        if(e.key===0){
            Router.push('/')
        }else{
            Router.push('/list?id='+e.key)
        }
    }

    return (
        <div className={s.header}>
            <Row type="flex" justify="center" align="middle">
                <Col xs={24} sm={24} md={10} lg={10} xl={10} className={s.headerTitle}>
                    <span className={s.headerLogo}>简单男孩のblog</span>
                    <span className={s.headerText}>桃李不言，下自成蹊</span>
                </Col>
                <Col xs={0} sm={0} md={14} lg={8} xl={6} >
                    <Menu
                        mode="horizontal"
                        onClick={handleClick}
                    >
                        <Menu.Item key="0">
                            <HomeOutlined />
                            首页
                        </Menu.Item>
                        {
                            navArray.map((item)=>{
                                return(
                                    <Menu.Item key={item.Id}>
                                        {item.typeName}
                                    </Menu.Item>
                                )
                            })
                        }
                    </Menu>
                </Col>
            </Row>
        </div>
    )
}





export default Header