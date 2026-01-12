let count = Number(localStorage.getItem("count") || 0);
let round = Number(localStorage.getItem("round") || 1);

const countEl = document.getElementById("count");
const roundEl = document.getElementById("round");
const textEl = document.getElementById("statusText");
const horse = document.getElementById("horse");
const btn = document.getElementById("tapBtn");

const texts = [
  "你点了",
  "你还在点",
  "手不累吗",
  "差不多得了",
  "你很执着",
  "真·信仰玩家",
];

const cryptoTexts = [
  "你已经像在拿着一个币",
  "它还没归零",
  "但你已经上头了",
  "再点一次就起飞？",
  "你知道这不一定有用",
];

function update() {
  countEl.innerText = count;
  roundEl.innerText = round;
}

update();

btn.addEventListener("click", () => {
  count++;
  localStorage.setItem("count", count);

  horse.classList.add("jump");
  setTimeout(() => horse.classList.remove("jump"), 200);

  if (count < 50) {
    textEl.innerText = texts[count % texts.length];
  } else if (count < 100) {
    textEl.innerText = "你已经点到这里了";
  } else if (count < 200) {
    textEl.innerText = cryptoTexts[count % cryptoTexts.length];
  } else {
    textEl.innerText = "你还在点";
  }

  if (count >= 777) {
    count = 0;
    round++;
    localStorage.setItem("round", round);
    localStorage.setItem("count", count);
    textEl.innerText = "新一轮开始了";
  }

  update();
});
