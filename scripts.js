$(document).ready(function(){
  
  $(".btn").click(function(){
    
    if ( $(".btn").text() == "Black and white" ) {
      $(".btn").text("Colorful");
    } else {
      $(".btn").text("Black and white");
    }
    
    $("img").toggleClass("filter");
    
  });
  
});

