$(document).ready(function() {
    $("#img1").click(function() {
      $(".p1").show();
      $("#img1").hide();
    });
    $(".p1").click(function() {
      $("#img1").show();
      $(".p1").hide();
    });
    
    
    $("#img2").click(function() {
        $(".p2").show();
        $("#img2").hide();
      });
      $(".p2").click(function() {
        $("#img2").show();
        $(".p2").hide();
      });
      
      $("#img3").click(function() {
        $(".p3").show();
        $("#img3").hide();
      });
      $(".p3").click(function() {
        $("#img3").show();
        $(".p3").hide();
      });
    


      $(".port1").hover(function(){
        $(".port1").mouseenter(function(){
        $("button").show();
        });
        $(".port1").mouseleave(function(){
          $("button").hide();
          });
         
      });


// $("#submit").click(function(){
//   $(".form-row").hide();
//   $(".message").show();
 
// });

});
// javascript
function myOnloadFunc() {
  $('#success_msg').modal('show');
}
