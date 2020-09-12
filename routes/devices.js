//  设备管理板块请求处理函数
//  引入express框架
const express = require('express')
//  创建一级路由
const devices = express.Router()

//  获取设备列表
devices.get('/',require('./devices/getDevicesList'))




//  导出
module.exports = devices