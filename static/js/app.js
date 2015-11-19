var myApp = new Framework7({
  pushState: true
});
var $$ = Framework7.$;

var mainView = myApp.addView('.view-main', {
  dynamicNavbar: true
});

myApp.onPageInit('index', function(page) {

});

myApp.init();

if (location.pathname === '/') {
  mainView.router.loadPage('/');
}