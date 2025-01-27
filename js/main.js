$(document).ready(function () {
  // ハンバーガーメニュー
  var hamburger = $('.hamburger-menu');
  $('.hamburger-button').on('click', function () {
    hamburger.toggleClass('hamburger-menu-active');
  });

  // 画面サイズが変わったらメニューを閉じる
  $(window).on('resize', function () {
    hamburger.removeClass('hamburger-menu-active');
  });


  // Swiper
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },

    autoplay: {
      delay: 4000,
      disableOnInterraction: false,
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });
});