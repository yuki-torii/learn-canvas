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
  ctx.fillRect(0, 0, 150, 150)
  ctx.save()

  ctx.fillStyle = '#09F'
  ctx.fillRect(15, 15, 120, 120)

  ctx.save()
  ctx.fillStyle = '#FFF'
  ctx.globalAlpha = 0.5
  ctx.fillRect(30, 30, 90, 90)

  ctx.restore()
  ctx.fillRect(45, 45, 60, 60)

  ctx.restore()
  ctx.fillRect(60, 60, 30, 30)
}
