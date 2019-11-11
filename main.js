
$(".dropdown > a").click(function() {

    if (!$(this).hasClass("active")) {
      $(".parent li").removeClass("active");
      $(".dropdowncontent").removeClass("open");
      $(this).addClass("active");
      $(".dropdowncontent").addClass("open");
      
    } else {
      $(".parent li").removeClass("active");
      $(".dropdowncontent").removeClass("open");
    
    }
  });