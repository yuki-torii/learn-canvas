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

  for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 6; j++) {
      ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ',' +
                       Math.floor(255 - 42.5 * j) + ',0)'
      ctx.fillRect(j * 25, i * 25, 25, 25)
    }
  }
}
