var myApp = new Framework7({
  pushState: true
});
var $$ = Framework7.$;

var mainView = myApp.addView('.view-main', {
  dynamicNavbar: true
});

myApp.onPageInit('index', function(page) {
  $$('.banner form').on('submit', function(e) {
    var action = $$(this).attr('action'),
      input = $$(this).find('input');
    mainView.router.loadPage(action + '?' + input.attr('name') + '=' + encodeURIComponent(input.val()));
    e.preventDefault();
  });
});

myApp.onPageInit('pingjia-info', function(page) {
  $$('.ui-pingjia-info-toolbar form').on('submitted', function(e) {
    var data = e.detail.data; // Ajax repsonse from action file
    data = JSON.parse(data);
    if (data.flag === 1) {
      myApp.alert('发布成功！', '提示信息');
    }
  });
});

myApp.onPageInit('zhuisu-info', function(page) {
  $$('.ui-zhuisu-info a.create-popup').on('click', function(e) {
    var url = $$(this).data('href');
    $$.ajax({
      url: url,
      success: function(data) {
        myApp.popup(data);
      }
    });
    e.preventDefault();
  });
});

myApp.init();

if (location.pathname === '/') {
  mainView.router.loadPage('/');
}