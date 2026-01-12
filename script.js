* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: radial-gradient(circle at top, #111 0%, #000 70%);
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC",
    "Helvetica Neue", Arial, sans-serif;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.app {
  text-align: center;
  width: 100%;
  max-width: 360px;
  padding: 24px;
}

.horse-wrap {
  height: 160px;
  margin-bottom: 16px;
}

#horse {
  height: 140px;
  transition: transform 0.2s ease;
}

#horse.jump {
  transform: translateY(-20px) scale(1.05);
}

.text {
  font-size: 20px;
  margin-bottom: 8px;
  opacity: 0.9;
}

.count {
  font-size: 14px;
  opacity: 0.6;
  margin-bottom: 24px;
}

button {
  width: 100%;
  padding: 16px 0;
  font-size: 18px;
  border-radius: 999px;
  border: none;
  background: #fff;
  color: #000;
  font-weight: 600;
}

button:active {
  transform: scale(0.97);
}
