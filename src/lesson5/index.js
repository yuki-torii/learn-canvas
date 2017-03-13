import image from './1.jpg'

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
  var img = new Image()
  img.onload = function () {
    ctx.drawImage(img, 0, 0, 150, 150)
  }
  img.src = image
}
