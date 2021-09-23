import React, {useState, useEffect} from 'react'
import marked from 'marked'
import '../static/css/AddArticle.css'
import {Row, Col, Input, Select, Button, DatePicker, message} from 'antd'
import axios from 'axios'
import servicePath from '../config/apiUrl'

const {Option} = Select
const {TextArea} = Input

function AddArticle(props) {

  useEffect(() => {
    // 从中台得到文章类别信息
    getTypeInfo()
    // 根据Id判断是否是修改文章
    let tmpId = props.match.params.id
    if (tmpId) {
      setArticleId(tmpId)
      getArticleById(tmpId)
    }
  }, [])

  const [articleId, setArticleId] = useState(0)  // 文章的ID，如果是0说明是新增加，如果不是0，说明是修改
  const [articleTitle, setArticleTitle] = useState('')   //文章标题
  const [articleContent, setArticleContent] = useState('')  //markdown的编辑内容
  const [markdownContent, setMarkdownContent] = useState('预览内容') //html内容
  const [introduceMd, setIntroduceMd] = useState()            //简介的markdown内容
  const [introduceHtml, setIntroduceHtml] = useState('等待编辑') //简介的html内容
  const [showDate, setShowDate] = useState()   //发布日期
  const [updateDate, setUpdateDate] = useState() //修改日志的日期
  const [typeInfo, setTypeInfo] = useState([]) // 文章类别信息
  const [selectedTypeId, setSelectType] = useState(0) //选择的文章类别 todo 这里的默认值有问题，应该是0或1或2
  const [selectedTypeName, setSelectedTypeName] = useState('请选择类别') //选择的文章类别
  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
  })
  const changeContent = (e) => {
    setArticleContent(e.target.value)
    let html = marked(e.target.value)
    setMarkdownContent(html)
  }

  const changeIntroduce = (e) => {
    setIntroduceMd(e.target.value)
    let html = marked(e.target.value)
    setIntroduceHtml(html)
  }

  //选择类别后的处理函数
  const selectTypeHandler = (value) => {
    setSelectedTypeName(value)
  }
  // 得到修改后的文章
  const getArticleById = (id) => {
    axios(servicePath.getArticleById + id, {
      withCredentials: true,
      header: {'Access-Control-Allow-Origin': '*'}
    }).then(
      res => {
        //let articleInfo= res.data.data[0]
        setArticleTitle(res.data.data[0].title)
        setArticleContent(res.data.data[0].article_content)
        let html = marked(res.data.data[0].article_content)
        setMarkdownContent(html)
        setIntroduceMd(res.data.data[0].introduce)
        let tmpInt = marked(res.data.data[0].introduce)
        setIntroduceHtml(tmpInt)
        setShowDate(res.data.data[0].addTime)
        setSelectType(res.data.data[0].type_id)
        let i = 0, length = typeInfo.length
        for (; i < length; i++) {
          console.log(typeInfo[i].Id, selectedTypeId)
          if (typeInfo[i].Id === selectedTypeId) {
            console.log(1111111111)
            setSelectedTypeName(typeInfo[i].typeName)
          }
        }
      }
    )
  }

  // 得到文章类别信息
  const getTypeInfo = () => {

    axios({
      method: 'get',
      url: servicePath.getTypeInfo,
      header: {'Access-Control-Allow-Origin': '*'},
      withCredentials: true
    }).then(
      res => {
        if (res.data.data === "没有登录") {
          // localStorage.removeItem('openId')
          props.history.push('/login')
        } else {
          setTypeInfo(res.data.data)
        }
      }
    )
  }


  //保存文章
  const saveArticle = () => {
    // markedContent()  //先进行转换
    if (!selectedTypeId) {
      message.error('必须选择文章类别')
      return false
    } else if (!articleTitle) {
      message.error('文章名称不能为空')
      return false
    } else if (!articleContent) {
      message.error('文章内容不能为空')
      return false
    } else if (!introduceMd) {
      message.error('简介不能为空')
      return false
    } else if (!showDate) {
      message.error('发布日期不能为空')
      return false
    }

    let dataProps = {}   //传递到接口的参数
    dataProps.type_id = selectedTypeId
    dataProps.title = articleTitle
    dataProps.article_content = articleContent
    dataProps.introduce = introduceMd

    let dateText = showDate.replace('-', '/') //把字符串转换成时间戳
    dataProps.addTime = (new Date(dateText).getTime()) / 1000

    if (articleId === 0) {
      console.log('articleId=:' + articleId)
      dataProps.view_count = Math.ceil(Math.random() * 100) + 1000
      axios({
        method: 'post',
        url: servicePath.addArticle,
        data: dataProps,
        withCredentials: true
      }).then(
        res => {
          setArticleId(res.data.insertId)
          if (res.data.isSuccess) {
            message.success('文章保存成功')
          } else {
            message.error('文章保存失败');
          }

        }
      )
    } else {

      dataProps.id = articleId
      axios({
        method: 'post',
        url: servicePath.updateArticle,
        header: {'Access-Control-Allow-Origin': '*'},
        data: dataProps,
        withCredentials: true
      }).then(
        res => {

          if (res.data.isSuccess) {
            message.success('文章保存成功')
          } else {
            message.error('保存失败');
          }


        }
      )
    }
  }

  return (
    <div>
      <Row gutter={5}>
        <Col span={18}>
          <Row gutter={10}>
            <Col span={20}>
              <Input
                placeholder="博客标题"
                size="large"
                value={articleTitle}
                onChange={e => {
                  setArticleTitle(e.target.value)
                }}
              />
            </Col>

            <Col span={4}>
              &nbsp;
              <Select value={selectedTypeName} size="large" onChange={selectTypeHandler}>
                {
                  typeInfo.map((item, index) => {
                    return (<Option key={item.Id} value={item.Id}>{item.typeName}</Option>)
                  })
                }
              </Select>
            </Col>
          </Row>
          <br/>
          <Row gutter={10}>
            <Col span={12}>
              <TextArea
                value={articleContent}
                className="markdown-content"
                rows={35}
                onChange={changeContent}
                onPressEnter={changeContent}
                placeholder="文章内容"
              />

            </Col>
            <Col span={12}>
              <div
                className="show-html"
                dangerouslySetInnerHTML={{__html: markdownContent}}>
              </div>
            </Col>
          </Row>
        </Col>

        <Col span={6}>
          <Row>
            <Col span={24}>
              <Button size="large">暂存文章</Button>&nbsp;
              <Button type="primary" size="large" onClick={saveArticle}>发布文章</Button>
              <br/>
            </Col>
            <Col span={24}>
              <br/>
              <TextArea
                rows={4}
                value={introduceMd}
                onChange={changeIntroduce}
                onPressEnter={changeIntroduce}
                placeholder="文章简介"
              />
              <br/><br/>
              <div
                className="introduce-html"
                dangerouslySetInnerHTML={{__html: '文章简介：' + introduceHtml}}>
              </div>
            </Col>

            <Col span={12}>
              <div className="date-select">
                <DatePicker
                  onChange={(date, dateString) => setShowDate(dateString)}
                  placeholder="发布日期"
                  size="large"
                />
              </div>
            </Col>
          </Row>
        </Col>


      </Row>
    </div>
  )
}

export default AddArticle