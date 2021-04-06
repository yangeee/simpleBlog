'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    let result = await this.app.mysql.get('blog_content',{})
    console.log(result)
    const { ctx } = this;
    ctx.body = '<h1>jspang blog list</h1>';
  }
  async list() {
    const { ctx } = this;
    ctx.body = '<h1>jspang blog list</h1>';
  }
}

module.exports = HomeController;
