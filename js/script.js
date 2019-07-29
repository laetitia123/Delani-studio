// This is Business Logic
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
        $("#button").show();
        });
        $(".port1").mouseleave(function(){
          $("#button").hide();
          });
         
      });
      $(".port1").hover(function(){
        $(".port1").mouseenter(function(){
        $("#button").show();
        });
        $(".port1").mouseleave(function(){
          $("#button").hide();
          });
         
      });

      $(".port2").hover(function(){
        $(".port2").mouseenter(function(){
        $("#button2").show();
        });
        $(".port2").mouseleave(function(){
          $("#button2").hide();
          });
         
      });

      $(".port3").hover(function(){
        $(".port3").mouseenter(function(){
        $("#button3").show();
        });
        $(".port3").mouseleave(function(){
          $("#button3").hide();
          });
         
      });

      $(".port4").hover(function(){
        $(".port4").mouseenter(function(){
        $("#button4").show();
        });
        $(".port4").mouseleave(function(){
          $("#button4").hide();
          });
         
      });
      $(".port5").hover(function(){
        $(".port5").mouseenter(function(){
        $("#button5").show();
        });
        $(".port5").mouseleave(function(){
          $("#button5").hide();
          });
         
      });
      $(".port6").hover(function(){
        $(".port6").mouseenter(function(){
        $("#button6").show();
        });
        $(".port6").mouseleave(function(){
          $("#button6").hide();
          });
         
      });
      $(".port7").hover(function(){
        $(".port7").mouseenter(function(){
        $("#button7").show();
        });
        $(".port7").mouseleave(function(){
          $("#button7").hide();
          });
         
      });
      $(".port8").hover(function(){
        $(".port8").mouseenter(function(){
        $("#button8").show();
        });
        $(".port8").mouseleave(function(){
          $("#button8").hide();
          });
         
      });

      
          
         
     



$("#submit").click(function(){
var name=$("#name").val();
var email=$("#email").val();
var textarea=$("styled").val();
alert("Hey " +name +"we have received your message. Thank you for reaching out to us. ");
 
});

});
