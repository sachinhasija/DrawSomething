const canvas = document.querySelector("#drw");
const ctx = canvas.getContext("2d");
const clearCanvas = document.querySelector("#clearCanvas");
ctx.strokeStyle = "red";
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.lineWidth = 100;
let startX = 0,
  startY = 0,
  isDrawing = false,
  hue = 0,
  lineWidth = true;

function draw(e) {
  if (!isDrawing) return;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [startX, startY] = [e.offsetX, e.offsetY];
  hue++;
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    lineWidth = !lineWidth;
  }
  if (lineWidth) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", e => {
  isDrawing = true;
  [startX, startY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
clearCanvas.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
