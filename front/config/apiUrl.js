let ipUrl
if (process.env.NODE_ENV === 'development') {
  ipUrl = 'http://127.0.0.1:7001/front/'
} else {
  ipUrl = 'https://yang.plus/api/front/'
}

const servicePath = {
  getArticleList: ipUrl + 'getArticleList', //  首页文章列表接口
  getArticleById: ipUrl + 'getArticleById/', // 文章详细页内容接口 ,需要接收参数
  getTypeInfo: ipUrl + 'getTypeInfo', // 文章详细页内容接口 ,需要接收参数
  getListById: ipUrl + 'getListById' // 根据类别ID获得文章列表
}
export const verse = {
  all: 'https://v1.jinrishici.com/all.json'
}

export default servicePath
