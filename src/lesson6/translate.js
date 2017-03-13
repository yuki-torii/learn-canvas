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
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      ctx.save()
      ctx.fillStyle = 'rgb(' + (51 * i) + ', ' + (255 - 51 * i) + ', 255)'
      ctx.translate(10 + j * 50, 10 + i * 50)
      ctx.fillRect(0, 0, 25, 25)
      ctx.restore()
    }
  }
}
