'use strict';

$('.slider').slick({
  autoplay: true,
  infinite: true,
  slidesToShow: 1,
  slideToScroll: 1,
  prevArrow: '<div class="slick-prev"></div>',
  nextArrow: '<div class="slick-next"></div>',
  dots: true,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  {
    breakpoint: 426,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  }  
  ]
});

$('#main-nav a[href^="#"]').click(function(){
  var elmHash = $(this).attr('href');
  var pos = $(elmHash).offset().top-100;
  $('body,html').animate({scrollTop: pos}, 500);
  return false;
});

$(".openbtn").click(function(){
  $(this).toggleClass('active');
});

$(".g-nav-openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".g-nav-openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});

$(window).resize(function() {
	mediaQueriesWin();// 機能編 5-1-1 ドロップダウンメニュー（上）の関数を呼ぶ
});