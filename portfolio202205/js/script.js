'use strict'
{
//スライダー(Slick)
    function checkBreakPoint(){
        
            //スマホ向け（768px以下のとき）
            $('.slider').not('.slick-initialized').slick({
                slidesToShow: 2,
                arrows: true,
				responsive: [
      				{
        				breakpoint: 768, // 768px以下のサイズに適用
        				settings: {
        				slidesToShow: 1,
        				},
      				},
    			],
			});
    }
    //ウィンドウがリサイズする度にチェック
    $(window).resize(function(){
        checkBreakPoint();
    });
    //初回チェック
    checkBreakPoint();
// 変数宣言
    // ハンバーガーメニューの要素
    const hamburgerMenu = document.querySelector(".hamburger-menu");

    // ハンバーガーメニューがクリックされた時に表示されるメニュー画面の要素
    const navi = document.getElementById("hamburger-navigation");

    // ハンバーガーメニューをクリックした時の処理
    hamburgerMenu.addEventListener("click", function () {
        // toggleを使用することで、hamburgerクラスとhamburger-navigationIDに
        // activeクラスが存在する場合は削除、存在しない場合を追加する処理を自動で行ってくれる
        hamburgerMenu.classList.toggle("active");
        navi.classList.toggle("active");
    });

    navi.addEventListener("click", function () {
        hamburgerMenu.classList.toggle("active");
        navi.classList.toggle("active");
    });


    $(function(){
		//アコーディオンメニュー クリックで動く
		$('.menu_Q').click(function(){
			$(this).toggleClass('active');
			$(this).next('.menu-content').slideToggle();
		});
	});

    //jQuery TabPager Plugin
    $(document).ready(function()
      {
        /**
         * @param items		1ページあたりの最大表示数（省略時の初期値は 5 ）
         * @param contents	タブコンテンツのクラス名（省略時の初期値は 'contents' ）
         * @param time		ページ切り替え時のフェードイン時間（省略時の初期値は 800 ）
         * @param previous	前のページに1つ戻るナビゲーションのテキスト（省略時の初期値は 'Previous&raquo;' ）
         * @param next		次のページに1つ進むナビゲーションのテキスト（省略時の初期値は '&laquo;Next' ）
         * @param start		初期ロード時のタブ開始位置（省略時の初期値は 1 ）
         * @param position	ページナビゲーションの表示位置（ 'top' または 'bottom' を指定可能で省略時の初期値は 'bottom' ）
         * @param scroll	スクロール位置を保持（ true または false を指定可能で省略時の初期値は true ）
         */
        $("#tab").tabpager({
          items: 6,
          contents: 'contents',
          //time: 300,
          previous: '<',
          next: '>',
          //start: 1,
          position: 'bottom',
          //scroll: true
        });
      });
	//スムーススクロール部分の記述
			$(function(){
	var headerHight = $("header").outerHeight();
  // #で始まるアンカーをクリックした場合に処理
  $('nav a[href^="#"]').click(function(){
    // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
    var adjust = 0;
    // スクロールの速度
    var speed = 400; // ミリ秒
    // アンカーの値取得
    var href= $(this).attr("href");
    // 移動先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を調整
    var position = target.offset().top - headerHight;
    // スムーススクロール
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});
//別ページで「Service」をクリックした時に該当場所に遷移する。
	$(function () {
    // 別ページの場合は以下
  var urlHash = location.hash;
  if (urlHash) {
    $('body,html').stop().scrollTop(0);
    setTimeout(function(){
      // ヘッダー固定の場合はヘッダーの高さを数値で入れる、固定でない場合は0
      var headerHight = $("header").outerHeight();
      var target = $(urlHash);
      var position = target.offset().top - headerHight;
      $('body,html').stop().animate({scrollTop:position}, 400);
  }, 100);
}
});
}