'use strict'
{
    var slideNums = 3; // 条件以外時の枚数
    if($(window).width() <= 767){
        slideNums = 1;
    }
    $('.slick').slick({
        slidesToShow: slideNums,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        focusOnSelect: true
    });

    // 変数宣言
    // ハンバーガーメニューの要素
    const hamburgerMenu = document.querySelector(".hamburger-menu");

    // ハンバーガーメニューがクリックされた時に表示されるメニュー画面の要素
    const navi = document.getElementById("hamburger-navigation");

    // ハンバーガーメニュー内の各セクションの要素
    const humbergerMenuSections = document.querySelectorAll(".humberger-menu-section");

    const mask = document.getElementById("mask");
    // ハンバーガーメニューをクリックした時の処理
    hamburgerMenu.addEventListener("click", function () {
        // toggleを使用することで、hamburgerクラスとhamburger-navigationIDに
        // activeクラスが存在する場合は削除、存在しない場合を追加する処理を自動で行ってくれる
        hamburgerMenu.classList.toggle("active");
        navi.classList.toggle('active');
        mask.classList.toggle('active');
    });

    humbergerMenuSections.forEach((humbergerMenuSection) => {
        humbergerMenuSection.addEventListener("click", function () {
            hamburgerMenu.classList.remove("active");
            navi.classList.remove("active");
            mask.classList.remove("active");
        });
    });

    //スクロールすると画像が下からふわっと表示される
    $(window).on('scroll load', function () {        /* ページロード時、またはスクロールされた時*/
        var scroll = $(this).scrollTop();            /* 現在のスクロール量を測定 */
        var windowHeight = $(window).height();       /* ウィンドウの高さを測定 */
        $('figure img').each(function () {                /* 「fadeIn」のクラスがついているものを1つずつ確認し・・・ */
            var cntPos = $(this).offset().top;         /* 対象の要素の上からの距離を測定 */
            if (scroll > cntPos - windowHeight + windowHeight / 3) {  /* 要素がある位置までスクロールされていたら */
                $(this).addClass('fadein');              /* 「active」のクラスを付与 */
            }
        });
    });

    //ページ内リンク
    $(function () {
        //ヘッダーの高さ
        var headerHeight = 80;//固定ヘッダーの高さを入れる
        // #で始まるa要素をクリックした場合に処理（"#"←ダブルクォーテンションで囲むのを忘れずに。忘れるとjQueryのバージョンによっては動かない。。）
        $('a[href^="#"]').click(function () {
            // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
            var adjust = 0;
            // スクロールの速度（ミリ秒）
            var speed = 400;
            // アンカーの値取得 リンク先（href）を取得して、hrefという変数に代入
            var href = $(this).attr("href");
            // 移動先を取得 リンク先(href）のidがある要素を探して、targetに代入
            var target = $(href == "#" || href == "" ? 'html' : href);
            // 移動先を調整 idの要素の位置をoffset()で取得して、positionに代入
            var position = target.offset().top + adjust - headerHeight;
            // スムーススクロール linear（等速） or swing（変速）
            $('body,html').animate({ scrollTop: position }, speed, 'swing');
            return false;
        });
    });
}