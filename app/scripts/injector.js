$(document).ready(function() {
  console.log("YO");
  $("body").css("background-color", "#FF0000");
  
  window.setTimeout(function() {
    var composeBtn = $("div:contains('COMPOSE')[role='button']");
    composeBtn.click();
  }, 5000);
});