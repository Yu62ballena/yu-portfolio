/* ==============================
	ハンバーガーメニュー
===============================*/
const burgerContainer = document.querySelector("#burger-menu-container");
const burgerBtns = document.querySelectorAll(".hamburger-btn");
const body = document.querySelector("body");


/* ==============================
	追従バーガーメニュー フェードイン・アウト
===============================*/
const followBtn = document.querySelector("#follow-btn");

const btnDisplay = (scrollAmount) => {
  if (scrollAmount > 500) {
    followBtn.classList.add("btn-active");
  } else {
    followBtn.classList.remove("btn-active");
  }
};

window.addEventListener("scroll", () => {
  const scrollAmount = window.scrollY;

  // 追従ボタン 表示
  btnDisplay(scrollAmount);
});


/* ==============================
	バーガーメニュー 開閉
===============================*/
// bodyタグのoverflow切り替え
const bodyOverflow = () => {
  const currentOverflow = body.style.overflow;

  if (currentOverflow === "hidden") {
    body.style.overflow = "visible";
  } else {
    body.style.overflow = "hidden";
  }
};

// ボタンクリック時のクラス管理
const menuOpenClose = () => {
  burgerBtns.forEach((btn) => {
    btn.classList.toggle("menu-active");
  });
  burgerContainer.classList.toggle("active");

  bodyOverflow();
};

// ボタンクリック時のクラス付与・削除の実行
burgerBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    menuOpenClose();
  });
});

// 背景クリックで閉じる
burgerContainer.addEventListener("click", () => {
  burgerBtns.forEach((btn) => {
    btn.classList.remove("menu-active");
  });
  burgerContainer.classList.remove("active");

  bodyOverflow();
});

/* ==============================
	Ripples
===============================*/
["#area"].forEach((selector) => {
  $(selector).ripples({
    dropRadius: 15,
    perturbance: 0.001,
  });
});



/* ==============================
	読み込み時に上から入ってくるheader
===============================*/
const header = document.querySelector("#top");

window.addEventListener("load", () => {
  header.classList.add("active");
})

/* ==============================
	footer コピーライトの年号 自動更新
===============================*/
const currentYear = new Date().getFullYear();

const copyright = document.querySelector("#copyright");
copyright.textContent = currentYear;


