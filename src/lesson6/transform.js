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
  var sin = Math.sin(Math.PI / 6)
  var cos = Math.cos(Math.PI / 6)
  ctx.translate(100, 100)
  var c = 0
  for (var i = 0; i <= 12; i++) {
    c = Math.floor(255 / 12 * i)
    ctx.fillStyle = 'rgb(' + c + ', ' + c + ', ' + c + ')'
    ctx.fillRect(0, 0, 100, 10)
    ctx.transform(cos, sin, -sin, cos, 0, 0)
  }

  ctx.setTransform(-1, 0, 0, 1, 100, 100)
  ctx.fillStyle = 'rgba(255, 128, 255, 0.5)'
  ctx.fillRect(0, 50, 100, 100)
}
