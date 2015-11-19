var myApp = new Framework7({
  pushState: true
});
var $$ = Framework7.$;

var mainView = myApp.addView('.view-main', {
  dynamicNavbar: true
});

myApp.onPageInit('*', function(page) {
  /*var url = page.url;
  $$('.toolbar .toolbar-inner a.link').each(function(index, v) {
    if ($$(this).attr('href').indexOf(url) !== -1) {
      $$(this).addClass('active');
    } else {
      $$(this).removeClass('active');
    }
  });*/
});

myApp.onPageInit('index', function(page) {
  /*var mySwiper1 = myApp.swiper('.swiper-1', {
    pagination: '.swiper-1 .swiper-pagination',
    spaceBetween: 50
  });*/
});

myApp.init();