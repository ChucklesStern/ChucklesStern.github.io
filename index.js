"use strict";
$(document).ready(function() {

var fontSize = parseInt($("body").css("font-size"));
var fontSize2 = fontSize + 50 + "px";


    $("#changeCSS").click(function() {
$("#img").css('border', "solid 2px red"),
$("#Header").animate({"font-size": fontSize2, "color": "red"}, "slow");
$("#Header").animate({"font-size": fontSize, "color": "black"}, "slow");
});
}); // end ready
