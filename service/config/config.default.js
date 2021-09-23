/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1617025477661_9545';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  // 数据库配置
  config.mysql = {
    // database configuration
    client: {
      // host
      host: 'localhost',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: 'root',
      // database
      database: 'simple_blog',
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: true,
  };
  // 跨域配置
  config.security = {
    csrf: {
      enable: false
    },
    domainWhiteList: [ 'http://127.0.0.1:3001','http://127.0.0.1:3000']
  };
  config.cors = {
    credentials: true,  //允许Cook可以跨域 todo 这里很不安全，上线后去掉
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
  };
  return {
    ...config,
    ...userConfig,
  };
};
