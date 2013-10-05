$(document).ready(function() {
  console.log("YO");
  $("body").css("background-color", "#FF0000");
  
  if (site) {
    // populate the menu
  }
  window.setTimeout(function() {
    var composeBtn = $("#fbNotificationsJewel").children("a")[0];
    composeBtn.click();
  }, 100);
});