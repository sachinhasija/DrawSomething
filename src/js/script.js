const canvas = document.querySelector("#drw");
const ctx = canvas.getContext("2d");
const clearCanvas = document.querySelector("#clearCanvas");
const strokeStyle = document.querySelector("#style");
const color = document.querySelector("#color");
const linewidth = document.querySelector("#linewidth");
function drawCanvas(ctx, canvas, reset) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.strokeStyle = "red";
  let startX = 0,
    startY = 0,
    isDrawing = false,
    lineWidth = true;

  function draw(e) {
    if (!isDrawing) return;
    ctx.strokeStyle = `${color.value}`;
    ctx.beginPath();
    ctx.lineCap = `${strokeStyle.value}`;
    ctx.lineWidth = `${linewidth.value}`;
    ctx.moveTo(startX, startY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [startX, startY] = [e.offsetX, e.offsetY];
  }
  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("mousedown", e => {
    isDrawing = true;
    [startX, startY] = [e.offsetX, e.offsetY];
  });
  canvas.addEventListener("mouseup", () => (isDrawing = false));
  canvas.addEventListener("mouseout", () => (isDrawing = false));
  reset.addEventListener("click", () => {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  });
}
window.onload = () => {
  drawCanvas(ctx, canvas, clearCanvas);
};
