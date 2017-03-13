/**
 * 创建canvas元素
 */
function createCanvas () {
  var el = document.createElement('canvas')
  document.body.appendChild(el)
  return el
}

var canvasEl = createCanvas()

// 检查浏览器是否支持
if (canvasEl.getContext) {
  var ctx = canvasEl.getContext('2d')
  var rectangle = new Path2D()
  rectangle.rect(10, 10, 50, 50)

  var circle = new Path2D()
  circle.moveTo(125, 35)
  circle.arc(100, 35, 25, 0, 2 * Math.PI)

  ctx.stroke(rectangle)
  ctx.fill(circle)
}
