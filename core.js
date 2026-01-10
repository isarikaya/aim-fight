// original code remains the same

// added code to change circle color to black
function drawCircle(x, y, radius) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fillStyle = 'black'; // changed fill color to black
  ctx.fill();
}