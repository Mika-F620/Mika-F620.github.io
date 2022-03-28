'use strict'

{
    // 変数宣言
    // ハンバーガーメニューの要素
    const hamburgerMenu = document.querySelector(".hamburger-menu");

    // ハンバーガーメニューがクリックされた時に表示されるメニュー画面の要素
    const navi = document.getElementById("hamburger-navigation");

    // ハンバーガーメニュー内の各セクションの要素
    const humbergerMenuSections = document.querySelectorAll(".humberger-menu-section");

    // ハンバーガーメニューをクリックした時の処理
    hamburgerMenu.addEventListener("click", function () {
        // toggleを使用することで、hamburgerクラスとhamburger-navigationIDに
        // activeクラスが存在する場合は削除、存在しない場合を追加する処理を自動で行ってくれる
        hamburgerMenu.classList.toggle("active");
        navi.classList.toggle('active');
    });

    humbergerMenuSections.forEach((humbergerMenuSection) => {
        humbergerMenuSection.addEventListener("click", function () {
            hamburgerMenu.classList.remove("active");
            navi.classList.remove("active");
     });
    });

}