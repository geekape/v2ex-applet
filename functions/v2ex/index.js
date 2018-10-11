// 云函数入口文件
const cloud = require('wx-server-sdk')
const request = require('request')


cloud.init()


// 云函数入口函数
exports.main = async (event, context) => {
  
  return new Promise((resolve, reject) => {
    request(event.url, function (error, response, body) {
      resolve(JSON.parse(body));
    })
  })
}