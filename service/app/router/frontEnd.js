module.exports = app => {
    const {router, controller} = app
    router.get('/frontEnd/index', controller.frontEnd.home.index)
    router.get('/frontEnd/getArticleList',controller.frontEnd.home.getArticleList)
}