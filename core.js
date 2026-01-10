console.log("init core.js")
const canvas = document.getElementById("myCanvas")
let scoreElement = document.getElementById("skor")
const ctx = canvas.getContext("2d")

scoreElement.textContent = 0
let circle = {}
let timeoutId

/**
 * Returns a random integer between min and max.
 * @param {number} min Minimum value (inclusive)
 * @param {number} max Maximum value (inclusive)
 * @returns {number} A random integer between min and max
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * Draws a random circle on the canvas.
 */
function drawRandomCircle() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  const x = getRandomInt(0, canvas.width)
  const y = getRandomInt(0, canvas.height)
  const radius = 32
  const color = `rgb(56, 235, 255)`

  circle = { x, y, radius }

  ctx.beginPath()
  ctx.arc(x, y, radius, 0, Math.PI * 2, false)
  ctx.fillStyle = color
  ctx.fill()
  ctx.closePath()

  timeoutId = setTimeout(drawRandomCircle, 750)
}

const audio = document.getElementById("audio")

/**
 * Plays the audio element.
 */
const playBell = () => {
  audio.currentTime = 0
  audio.play()
}

/**
 * Stops the audio element.
 */
const stopBell = () => {
  audio.pause()
  audio.currentTime = 0
}

/**
 * Checks if a click event occurred within the circle.
 * @param {MouseEvent} event The click event
 */
function checkClick(event) {
  const rect = canvas.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top
  console.log('x', x)
  console.log('y', y)
  const distance = Math.sqrt((x - circle.x) ** 2 + (y - circle.y) ** 2)
  if (distance <= circle.radius) {
    playBell()
    scoreElement.textContent = parseInt(scoreElement.textContent) + 1
    clearTimeout(timeoutId)
    drawRandomCircle()
  }
}

canvas.addEventListener("click", checkClick)

drawRandomCircle()