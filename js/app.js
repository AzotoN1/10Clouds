$('.input-number').keyup(function(){
    $(this).val($(this).val().replace(/(\d{3})\-?(\d{3})\-?(\d{3})/,'$1-$2-$3'))
});


// Ten kod zosta utworzony z pomocą doświadczonego programisty. Nie jest on samodzielny.
//
//
//
//
$(function () {
   $(".input-number").keydown(function (e) {
       if ((e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
         (e.keyCode >= 35 && e.keyCode <= 40) ||
         $.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1) {
         return;
      }
      if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) &&
         (e.keyCode < 96 || e.keyCode > 105)) {
          e.preventDefault();
      }
   });
});
//
//
//
//

$(".icon-male").on("click", function() {
    $(".dot-check-fem").css("background", "rgb(222, 217, 217)");
    $(".square-check-fem").css("border", "2px solid rgb(222, 217, 217)");
    $(".color-changer-female").css("visibility", "hidden");
    $(".dot-check").css("background", "rgb(0, 255, 110)");
    $(".square-check").css("border", "2px solid rgb(0, 255, 110)");
    $(".color-changer-male").css("visibility", "visible");
})


$(".icon-female").on("click", function() {
  $(".dot-check-fem").css("background", "rgb(0, 255, 110)");
  $(".square-check-fem").css("border", "2px solid rgb(0, 255, 110)");
  $(".color-changer-female").css("visibility", "visible");
  $(".dot-check").css("background", "rgb(222, 217, 217)");
  $(".square-check").css("border", "2px solid rgb(222, 217, 217)");
  $(".color-changer-male").css("visibility", "hidden");

});
