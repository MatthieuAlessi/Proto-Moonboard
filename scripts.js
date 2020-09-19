$(document).ready(function(){
  
  $(".btn2").click(function(){
    
    if ( $(".btn2").text() == "Black and white" ) {
      $(".btn2").text("Colorful");
    } else {
      $(".btn2").text("Black and white");
    }
    
    $("img").toggleClass("filter");
    
  });
  
  
  $(".btn3").click(function(){
    
    
    $(".card-columns").toggleClass("masonry");
    
  });
  
});

$("switch-input").click(function(){
    $("img").toggleClass("filter");
});

document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('input[type="checkbox"]');

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      $("img").toggleClass("filter")
      
    } else {
      $("img").toggleClass("filter-off");
      
    }
  });
});