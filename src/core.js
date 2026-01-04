function drawRandomCircle() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  const x = getRandomInt(0, canvas.width)
  const y = getRandomInt(0, canvas.height)
  const radius = 32
  const color = `rgb(255, 255, 0)` // Changed color to yellow

  circle = { x, y, radius }

  ctx.beginPath()
  ctx.arc(x, y, radius, 0, Math.PI * 2, false)
  ctx.fillStyle = color
  ctx.fill()
  ctx.closePath()

  timeoutId = setTimeout(drawRandomCircle, 750)
}