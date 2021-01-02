// jQueryでHTMLの読み込みが完了してからCSSを読みこむ
$(function(){
  var style = "<link rel='stylesheet' href='animation.css'>";
  $('head:last').after(style);
});