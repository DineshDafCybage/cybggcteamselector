(function ($) {
  $(".plus").click(function () {
    $(this).parent().toggleClass("clicked");
  });
})(jQuery);

function resetMale() {
  var maleBoxes = document.getElementsByClassName("male");
  var maleLen = maleBoxes.length;
  for (var i = 0; i < maleLen; i++) {
    maleBoxes[i].getElementsByClassName("overlay")[0].className = "overlay";
  }
}

function resetFemale() {
  var femaleBoxes = document.getElementsByClassName("female");
  var femaleLen = femaleBoxes.length;
  for (var i = 0; i < femaleLen; i++) {
    femaleBoxes[i].getElementsByClassName("overlay")[0].className = "overlay";
  }
}