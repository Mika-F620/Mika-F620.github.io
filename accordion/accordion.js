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

  const menus =  document.querySelectorAll(".menu-title");
  menus.forEach((menu, index)=>{
    menu.addEventListener('click', function(){
      menuContents[index].classList.toggle('display-none');
      upArrows[index].classList.toggle('display-none');
      downArrows[index].classList.toggle('display-none');
    })
  })


 
}
