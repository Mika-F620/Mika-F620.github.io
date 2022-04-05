'use strict'
{
    // 変数宣言
    // ハンバーガーメニューの要素
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const hummenu = document.querySelector(".hum_menu");

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

    hummenu.addEventListener("click", function () {
        hamburgerMenu.classList.toggle("active");
        navi.classList.toggle('active');
    });

    humbergerMenuSections.forEach((humbergerMenuSection) => {
        humbergerMenuSection.addEventListener("click", function () {
            hamburgerMenu.classList.toggle("active");
            navi.classList.toggle('active');
        });
    });

    // headerをスクロールすると、背景色が付く
    jQuery(window).on('scroll', function () {
        if (jQuery('.scroll_bg').height() < jQuery(this).scrollTop()) {
            jQuery('.header-contents').addClass('bg');
        } else {
            jQuery('.header-contents').removeClass('bg');
        }
    });


    $(function () {
        $('a[href^="#"]').click(function () {
            var headerHeight = $('.header-contents').outerHeight();
            var adjust = 0;
            var speed = 400;
            var href = $(this).attr("href");
            var target = $(href == "#" || href == "" ? 'html' : href);
            var position = target.offset().top + adjust - headerHeight;
            $('body,html').animate({ scrollTop: position }, speed, 'swing');
            jQuery('#hamburger-navigation').removeClass('active');
            jQuery('.hamburger-menu').removeClass('active');
            return false;

        });
    });

}