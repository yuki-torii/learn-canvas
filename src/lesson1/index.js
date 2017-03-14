/**
 * 创建canvas元素
 *
 * 对于canvas的第一印象来说，它比较像是一个img
 * 初始化的宽度是300px、高度是150px
 */
function createCanvas () {
  // 创建出一个canvas元素
  var el = document.createElement('canvas')

  // 添加到body标签上
  document.body.appendChild(el)

  // 返回canvas元素
  return el
}

// 获得创建出来的canvas元素
var canvasEl = createCanvas()

// 检查浏览器是否支持
if (canvasEl.getContext) {
  // 获取2D图形绘画界面
  // 相当于我们取得了一个画笔，这样就可以在画布上作画
  var ctx = canvasEl.getContext('2d')

  ctx.fillStyle = 'rgb(200, 0, 0)'
  ctx.fillRect(10, 10, 50, 50)

  ctx.fillStyle = 'rgba(0, 0, 200, 0.5)'
  ctx.fillRect(30, 30, 50, 50)
}
