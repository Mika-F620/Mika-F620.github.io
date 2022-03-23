$('.slider').slick({
  autoplay: true,
  autoplaySpeed: 5000,
});

$(function () {
  $('a[href^="#"]').click(function () {
    var adjust = 0;
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;
    $('body,html').animate({ scrollTop: position }, speed, 'swing');
    return false;
  });
});

//スクロール途中からヘッダーを出現させるための設定を関数でまとめる
function FixedAnime() {
  var elemTop = $('#concept').offset().top;//#conceptの位置まできたら
  var scroll = $(window).scrollTop();
  if (scroll <= elemTop) {
    $('.header_contents').removeClass('bg');
  } else {
    $('.header_contents').addClass('bg');
  }
  if (scroll <= 20) {//上から20pxスクロールされたら
    $('.header_contents').addClass('DownMove');//DownMoveというクラス名を除き
  } else if (scroll >= elemTop) {
    $('.header_contents').removeClass('UpMove');//.header_contentsについているUpMoveというクラス名を除く
    $('.header_contents').addClass('DownMove');//.header_contentsについているDownMoveというクラス名を付与
  } else {
    if ($('.header_contents').hasClass('DownMove')) {//すでに.header_contentsにDownMoveというクラス名がついていたら
      $('.header_contents').removeClass('DownMove');//DownMoveというクラス名を除き
      $('.header_contents').addClass('UpMove');//UpnMoveというクラス名を付与
    }
  }
}
// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  FixedAnime();/* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
});

$(function () {

  $('.zdo_drawer_button').click(function () {
    $(this).toggleClass('active');
    $('.zdo_drawer_bg').fadeToggle();
    $('nav').toggleClass('open');
  })
  $('.zdo_drawer_bg').click(function () {
    $(this).fadeOut();
    $('.zdo_drawer_button').removeClass('active');
    $('nav').removeClass('open');
  });


})

$(function () {
  var state = false;
  var pos;
  $('.zdo_drawer_button').click(function () {
    if (state == false) {
      pos = $(window).scrollTop();
      $('body').addClass('fixed').css({ 'top': -pos });
      state = true;
    } else {
      $('body').removeClass('fixed').css({ 'top': 0 });
      window.scrollTo(0, pos);
      state = false;
    }
  });
});

$('.zdo_drawer_nav a[href]').on('click', function (event) {
  $('.zdo_drawer_button').trigger('click');
});