let API_HOST = "http://xxx.com/xxx";
var Mock = require('mock.js')
function ajax(data = '', fn, method = "get", header = {}) {
  // 模拟数据
  var res = Mock.mock({

    'data|20-100': [{
      'id|+1': 1,
      'title': '@ctitle(5,20)',
      'time|1-59': 1,
      'mes|0-1000': 1,
      'name': '@word(3, 10)',
      'tag': '@ctitle(2,6)',
      'icon': '@image(80x80)'
    }]
  })
    // 输出结果
    // console.log(JSON.stringify(res, null, 2))
    fn(res);

}
module.exports = {
  ajax: ajax
}