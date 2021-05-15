module.exports = app => {
    const {router, controller} = app
    let adminAuth = app.middleware.adminauth()
    router.get('/admin/index', controller.admin.main.index)
    router.post('/admin/checkLogin', controller.admin.main.checkLogin)
    router.get('/admin/getTypeInfo',adminAuth ,controller.admin.main.getTypeInfo)
}