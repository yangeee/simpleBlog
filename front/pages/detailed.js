import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { Col, Row } from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Footer from '../components/Footer'
import marked from 'marked'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
// 数据请求
import axios from 'axios'
import servicePath from '../config/apiUrl'
// 样式文件
import s from '@sp/detailed.module.scss'
import 'highlight.js/styles/monokai-sublime.css'

hljs.registerLanguage('javascript', javascript)

const Detailed = (props) => { // props来自下面的初始化promise的resolve
  const articleContent = props.article_content
  const articleTitle = props.title
  const viewCount = props.view_count
  const typeName = props.typeName
  const addTime = props.addTime

  const renderer = new marked.Renderer()
  renderer.heading = function (text, level) {
    return `<h${level}>${text}</h${level}>`
  }

  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: true,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
      return hljs.highlightAuto(code).value
    }
  })
  const html = marked.parse(articleContent)

  return (
    <>
      <Head>
        <title>{articleTitle}</title>
      </Head>
      <Header/>
      <Row className={s.com_main} type="flex" justify="center">
        <Col className={s.com_left} xs={24} sm={24} md={16} lg={18} xl={14}>
          <div>
            <div>
              <div className={s.detailed_title}>
                {articleTitle}
              </div>

              <div className={s.labels + ' ' + s.center}>
                <span>{addTime} </span>
                <span>{typeName} </span>
                <span> {viewCount}次浏览</span>
              </div>
            </div>
            <div className={s.contentAll}>
              <div className={s.detailed_content}
                   dangerouslySetInnerHTML={{ __html: html }}>
              </div>
            </div>
          </div>
        </Col>

        <Col className xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author/>
          {/* <Affix offsetTop={5}> */}
          {/*  <div className={s.nav_title}>文章目录</div> */}
          {/* </Affix> */}
        </Col>
      </Row>
      <Footer/>

    </>
  )
}
Detailed.getInitialProps = async (context) => {
  console.log(context.query.id)
  const id = context.query.id
  const promise = new Promise((resolve) => {
    axios(servicePath.getArticleById + id).then((res) => {
      resolve(res.data.data[0])
    }
    )
  })

  return await promise
}
Detailed.propTypes = {
  list: PropTypes.any,
  title: PropTypes.any,
  article_content: PropTypes.any,
  view_count: PropTypes.any,
  typeName: PropTypes.any,
  addTime: PropTypes.any
}
export default Detailed
