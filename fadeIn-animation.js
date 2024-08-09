/* ===============================
    fadeIn animation
================================= */
// スクロールに合わせてフェードインさせるアニメーション
// アニメーションさせたい対象の要素にfadeInのクラスを振ると、
// その要素自身と直下の子要素にフェードインが付与される。
// 合わせて直下の子要素only-fadeIn, from-bottom, from-upper,
// from-left, from-rightをクラスに振ることで
// 動きの向きを設定することが出来る
// また、durationも各子要素にdata-duration="0.5s"のように設定することで
// 個別設定も可能。

// 動きの量はscss内の$pattern内の数値をカスタマイズすることで可能

document.addEventListener("DOMContentLoaded", () => {
  // fadeInクラスを持つ全ての要素を取得
  const containers = document.querySelectorAll(".fadeIn");

  const animation = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const duration = target.dataset.duration || "1.5s"; // デフォルト値を 1s とする

        target.style.animationDuration = duration;
        target.classList.add("fadeIn-animation");
        observer.unobserve(target);
      }
    });
  };

  const imageOptions = {
    root: null,
    rootMargin: "-15px 0px",
    threshold: 0,
  };

  const showImage = new IntersectionObserver(animation, imageOptions);

  // 各fadeIn要素とその子要素に対してObserverを設定
  containers.forEach((container) => {
    showImage.observe(container);
    Array.from(container.children).forEach((child) => {
      showImage.observe(child);
    });
  });
});
