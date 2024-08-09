/* ==============================
	Ripples
===============================*/
// ripplesのdivを取得
const areas = document.querySelectorAll("#area, #area2, #area3");

["#area2", "#area3"].forEach((selector) => {
  $(selector).ripples({
    dropRadius: 15,
    perturbance: 0.001,
  });
});

// 背景切り替えの高さを取得
const getElementHeight = (target) => {
  const element = document.querySelector(`.${target}`);
  return element.getBoundingClientRect().top + window.scrollY;
};

const firstChangePoint = getElementHeight("my-creations");
const secondChangePoint = getElementHeight("inquiry-flow");

// ディスプレイの高さを取得
const displayHeight = document.documentElement.clientHeight;

// ripples用背景の切り替え関数
// 実行はスクロールイベントリスナー内で
const ripplesBgChanger = (scrollAmount) => {
  // スクロールに応じて背景切り替え
  let activeIndex;
  if (scrollAmount < firstChangePoint - displayHeight) {
    activeIndex = 0;
  } else if (scrollAmount < secondChangePoint - displayHeight) {
    activeIndex = 1;
  } else {
    activeIndex = 2;
  }

  areas.forEach((area, index) => {
    area.classList.toggle("active", index === activeIndex);
  });
};

/* ==============================
	スクロールイベントリスナー
===============================*/
window.addEventListener("scroll", () => {
  const scrollAmount = window.scrollY;

  // ripples 背景切り替え
  ripplesBgChanger(scrollAmount);
});

/* ==============================
	スムーズスクロール
===============================*/

const navLinks = document.querySelectorAll(".first-view-nav a, .burger-menu-list a");

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // スクロール位置の調整値（ピクセル）
      const offset = 60;

      // スクロールにかかる時間設定（ms）
      smoothScroll(targetElement, 1000, offset);
    }
  });
});

function smoothScroll(target, duration, offset) {
  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
  const startPosition = window.pageYOffset;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, targetPosition - startPosition, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

/* ==============================
	クラス ランダム付与
===============================*/
// targetと配列を関数の外で作る
// targetと配列を引数で渡す

// ランダムでクラスを付与する関数
const randomSetClasses = (targets, classes) => {
  targets.forEach((target) => {
    const setClass = classes[Math.floor(Math.random() * classes.length)];
    target.classList.add(setClass);
  });
};

// ランダムでイメージの角を丸める（My Creations）
const radiusTargets = document.querySelectorAll(".ranRadius");
const radiusClasses = ["ranbd-tl", "ranbd-tr", "ranbd-bl", "ranbd-br"];

randomSetClasses(radiusTargets, radiusClasses);

// ランダムでボタンのカラーを設定する
const creativeBtns = document.querySelectorAll(".wave");
const colorClasses = ["red-wave", "blue-wave", "orange-wave", "green-wave"];

randomSetClasses(creativeBtns, colorClasses);

/* ==============================
	パーティクルdivの高さ指定
===============================*/
// #get-in-touch-with-meの高さを取得して、
// #particle-containerにセット

const contactSection = document.querySelector("#get-in-touch-with-me");
const particleContainer = document.querySelector("#particle-container");

const contactHeight = contactSection.clientHeight;
particleContainer.style.height = contactHeight + "px";

/* ==============================
	particles.js
===============================*/
particlesJS("particle-container", {
  particles: { number: { value: 48, density: { enable: true, value_area: 881.8766334760375 } }, color: { value: "#888888" }, shape: { type: "circle", stroke: { width: 0, color: "#999999" }, polygon: { nb_sides: 5 }, image: { src: "img/github.svg", width: 100, height: 100 } }, opacity: { value: 0.5, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } }, size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } }, line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 }, move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } } },
  interactivity: { detect_on: "canvas", events: { onhover: { enable: false, mode: "repulse" }, onclick: { enable: true, mode: "repulse" }, resize: true }, modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 247.75224775224774, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } } },
  retina_detect: true,
});
