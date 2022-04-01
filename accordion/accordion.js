'use strict'

{
// 変数宣言
// 開閉されるコンテンツ
const menuContents = document.querySelectorAll(".menu-content");

// 下矢印マークの要素
const downArrows = document.querySelectorAll(".fa-angle-down");

// 上矢印マークの要素
const upArrows = document.querySelectorAll(".fa-angle-up");


// 下矢印をクリックした時の処理
// downArrows.forEach((downArrow, index) => {
//     downArrow.addEventListener('click', function () {
//       menuContents[index].classList.remove('display-none');
//       upArrows[index].classList.remove('display-none');
//       downArrows[index].classList.add('display-none');
      
//     })
//   });

//   // 上矢印をクリックした時の処理
//   upArrows.forEach((upArrow, index) => {
//     upArrow.addEventListener('click', function () {
//       menuContents[index].classList.add('display-none');
//       upArrows[index].classList.add('display-none');
//       downArrows[index].classList.remove('display-none');
//     })
//   });

/* =================================================== */
// slideUp, slideDown, slideToggle関数を定義
/* =================================================== */

// 要素をスライドしながら非表示にする関数(jQueryのslideUpと同じ)
const slideUp = (el, duration = 300) => {
  el.style.height = el.offsetHeight + "px";
  el.offsetHeight;
  el.style.transitionProperty = "height, margin, padding";
  el.style.transitionDuration = duration + "ms";
  el.style.transitionTimingFunction = "ease";
  el.style.overflow = "hidden";
  el.style.height = 0;
  el.style.paddingTop = 0;
  el.style.paddingBottom = 0;
  el.style.marginTop = 0;
  el.style.marginBottom = 0;
  setTimeout(() => {
    el.style.display = "none";
    el.style.removeProperty("height");
    el.style.removeProperty("padding-top");
    el.style.removeProperty("padding-bottom");
    el.style.removeProperty("margin-top");
    el.style.removeProperty("margin-bottom");
    el.style.removeProperty("overflow");
    el.style.removeProperty("transition-duration");
    el.style.removeProperty("transition-property");
    el.style.removeProperty("transition-timing-function");
    el.classList.remove("is-open");
  }, duration);
};

// 要素をスライドしながら表示する関数(jQueryのslideDownと同じ)
const slideDown = (el, duration = 300) => {
  el.classList.add("is-open");
  el.style.removeProperty("display");
  let display = window.getComputedStyle(el).display;
  if (display === "none") {
    display = "block";
  }
  el.style.display = display;
  let height = el.offsetHeight;
  el.style.overflow = "hidden";
  el.style.height = 0;
  el.style.paddingTop = 0;
  el.style.paddingBottom = 0;
  el.style.marginTop = 0;
  el.style.marginBottom = 0;
  el.offsetHeight;
  el.style.transitionProperty = "height, margin, padding";
  el.style.transitionDuration = duration + "ms";
  el.style.transitionTimingFunction = "ease";
  el.style.height = height + "px";
  el.style.removeProperty("padding-top");
  el.style.removeProperty("padding-bottom");
  el.style.removeProperty("margin-top");
  el.style.removeProperty("margin-bottom");
  setTimeout(() => {
    el.style.removeProperty("height");
    el.style.removeProperty("overflow");
    el.style.removeProperty("transition-duration");
    el.style.removeProperty("transition-property");
    el.style.removeProperty("transition-timing-function");
  }, duration);
};

// 要素をスライドしながら交互に表示/非表示にする関数(jQueryのslideToggleと同じ)
const slideToggle = (el, duration = 300) => {
  if (window.getComputedStyle(el).display === "none") {
    return slideDown(el, duration);
  } else {
    return slideUp(el, duration);
  }
};


  const menus =  document.querySelectorAll(".menu-title");
  const content = document.querySelectorAll(".menu-content");
  menus.forEach((menu, index)=>{
    menu.addEventListener('click', function(){
      // menuContents[index].classList.toggle('display-none');
      upArrows[index].classList.toggle('display-none');
      downArrows[index].classList.toggle('display-none');
      slideToggle(content[index]);
    })
  })





 
}
