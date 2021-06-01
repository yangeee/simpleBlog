import React,{useState} from 'react'
import Head from 'next/head'
import {Row, Col  ,Breadcrumb, Affix  } from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import s from '@sp/detailed.module.scss'
import { CalendarOutlined , FolderAddOutlined, FireOutlined} from '@ant-design/icons'
import marked from 'marked'
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);
import 'highlight.js/styles/monokai-sublime.css';
import axios from "axios"
import  servicePath  from '../config/apiUrl'
import Tocify from '../components/tocify.tsx'




const Detailed = (props) => {// props来自下面的初始化promise的resolve
    let articleContent=props.article_content

    const tocify = new Tocify()
    const renderer = new marked.Renderer();
    renderer.heading = function(text, level, raw) {
        const anchor = tocify.add(text, level);
        return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
    };

    marked.setOptions({
        renderer: renderer,
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: false,
        smartLists: true,
        smartypants: false,
        highlight: function (code) {
            return hljs.highlightAuto(code).value;
        }
    });
    let html = marked(articleContent)

    return(
        <>
            <Head>
                <title>博客详细页</title>
            </Head>
            <Header />
            <Row className={s.com_main} type="flex" justify="center">
                <Col className={s.com_left} xs={24} sm={24} md={16} lg={18} xl={14}>
                    <div>
                        <div className={s.bread_div}>
                            <Breadcrumb>
                                <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                                <Breadcrumb.Item>文章列表</Breadcrumb.Item>
                                <Breadcrumb.Item>xxxx</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>

                        <div>
                            <div className={s.detailed_title}>
                               你知道我要说什么
                            </div>

                            <div className={s.iconAll + ' ' +s.center}>
                                <span><CalendarOutlined /> 2021-06-28</span>
                                <span><FolderAddOutlined /> 白月魁老婆</span>
                                <span><FireOutlined /> 5498人</span>
                            </div>

                            <div className={s.detailed_content}
                                 dangerouslySetInnerHTML = {{__html:html}}   >
                            </div>

                        </div>

                    </div>
                </Col>

                <Col className xs={0} sm={0} md={7} lg={5} xl={4}>
                    <Author />
                    <Advert />
                    <Affix offsetTop={5}>
                        <div className=" ">
                            <div className={s.nav_title}>文章目录</div>
                            <div className={s.toc_list}>
                                {tocify && tocify.render()}
                            </div>
                        </div>
                    </Affix>
                </Col>
            </Row>
            <Footer/>

        </>
    )
}
Detailed.getInitialProps = async(context)=>{

    console.log(context.query.id)
    let id =context.query.id
    const promise = new Promise((resolve)=>{
        axios(servicePath.getArticleById+id).then((res)=>{
                resolve(res.data.data[0])
            }
        )
    })

    return await promise
}
export default Detailed