



$(document).ready(function () {

$(".dropdown").click(function() {

    var selected = $(this).find(".dropdowncontent").hasClass("active");

    $(".dropdowncontent").removeClass("active");
    
    if (selected == false){
        $(this).find(".dropdowncontent").toggleClass("active");
    }
  });

});