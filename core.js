const canvas = document.getElementById("myCanvas")
let skor = document.getElementById("skor")
const ctx = canvas.getContext("2d")

skor.textContent = 0
let circle = {}
let timeoutId

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function drawRandomCircle() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  const x = getRandomInt(0, canvas.width)
  const y = getRandomInt(0, canvas.height)
  const radius = 32
  const color = `rgb(56, 235, 255)`

  circle = { x, y, radius }
  console.log('circle', circle)

  ctx.beginPath()
  ctx.arc(x, y, radius, 0, Math.PI * 2, false)
  ctx.fillStyle = color
  ctx.fill()
  ctx.closePath()

  timeoutId = setTimeout(drawRandomCircle, 2000)
}
const audio = document.getElementById("audio")
const playBell = () => {
  audio.currentTime = 0
  audio.play()
}

const stopBell = () => {
  audio.pause()
  audio.currentTime = 0
}

function checkClick(event) {
  const rect = canvas.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top
  console.log('x', x)
  console.log('y', y)
  const distance = Math.sqrt((x - circle.x) ** 2 + (y - circle.y) ** 2)
  if (distance <= circle.radius) {
    playBell()
    skor.textContent = parseInt(skor.textContent) + 1
    clearTimeout(timeoutId)
    drawRandomCircle()
  }
}

canvas.addEventListener("click", checkClick)

drawRandomCircle()
