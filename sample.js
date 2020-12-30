var win_width; //ウィンドウの横サイズ
var win_height; //ウィンドウの縦サイズ

var supportTouch = 'ontouchend' in document; // タッチイベントが利用可能かの判別

// イベント名
var EVENTNAME_TOUCHSTART = supportTouch ? 'touchstart' : 'mousedown';
var EVENTNAME_TOUCHMOVE = supportTouch ? 'touchmove' : 'mousemove';
var EVENTNAME_TOUCHEND = supportTouch ? 'touchend' : 'mouseup';

// jQueryでHTMLの読み込みが完了してからCSSを読みこむ
$(function(){
  var style = "<link rel='stylesheet' href='animation.css'>";
  $('head:last').after(style);
});

// スクロールを禁止する関数
(function() {
    function noScroll(event) {
      event.preventDefault();
    }
    document.addEventListener('touchmove', noScroll, { passive: false }); // スクロール禁止(SP)
    document.addEventListener('mousewheel', noScroll, { passive: false }); // スクロール禁止(PC)
})();

// 初期設定
function initDefine() {
    win_width = window.innerWidth; //ウィンドウの横サイズ
    win_height = window.innerHeight; //ウィンドウの縦サイズ
}

// window(HTML)の読み込みが完了してから初期設定
window.onload = function(){
    initDefine();
};
