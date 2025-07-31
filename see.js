// เข็มความเร็วหมุนได้
const canvas = document.getElementById("speedometer");
const ctx = canvas.getContext("2d");

function drawSpeedometer(speed) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const centerX = 150;
  const centerY = 150;
  const radius = 100;

  // วาดหน้าปัด
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0.75 * Math.PI, 0.25 * Math.PI, false);
  ctx.strokeStyle = "#555";
  ctx.lineWidth = 20;
  ctx.stroke();

  // วาดเข็ม
  let angle = (0.75 + (speed / 180) * 1.5) * Math.PI;
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(centerX + radius * Math.cos(angle), centerY + radius * Math.sin(angle));
  ctx.strokeStyle = "#f00";
  ctx.lineWidth = 4;
  ctx.stroke();
}

// ความเร็วจำลอง + RPM
let currentSpeed = 0;
setInterval(() => {
  currentSpeed = (Math.random() * 180).toFixed(0);
  drawSpeedometer(currentSpeed);
  document.getElementById("speed").innerText = currentSpeed;

  const rpmPercent = Math.min((currentSpeed / 180) * 100, 100);
  document.getElementById("rpm-fill").style.width = rpmPercent + "%";
}, 1500);

// เวลาแบบเรียลไทม์
setInterval(() => {
  const now = new Date();
  document.getElementById("time").innerText = now.toLocaleTimeString();
}, 1000);

// เกียร์สุ่ม
const gears = ["N", "1", "2", "3", "4", "5"];
setInterval(() => {
  document.getElementById("gear").innerText = gears[Math.floor(Math.random() * gears.length)];
}, 2000);

// พิกัด GPS ปลอม
const fakeGPS = { lat: 13.7563, lng: 100.5018 };
document.getElementById("location").innerText = `${fakeGPS.lat}, ${fakeGPS.lng}`;
