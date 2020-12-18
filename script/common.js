$(document).ready(function(){

    // 메뉴
    $("#mainMenu li").hover(
      function(){
        $(this).children(".subMenu").stop().slideDown();
      },
      function(){
        $(this).children(".subMenu").stop().slideUp();
      }
    )
    // 검색창
    $(".searchBtn").toggle(
      function(){
        $(".searchText").animate({ opacity: 1, width: 180 })
      },
      function(){
        $(".searchText").animate({ opacity: 0, width: 0 })
      }
    )
    // 슬라이드
    $(".marginR:eq(0) div").animate({ opacity: 1 }, 700)
    $(".marginR:eq(0) div").children("a").animate({ right: 15 })

    var className, classNum;
    function moveSlider(){
      className = $("#slider div.slide:first").attr("class");
      classNum = className.substr(6, 1)
      if ( classNum == 5 ) classNum = 0
      $("#sliderNum span").removeClass("numOn")
      $("#sliderNum span:eq("+ classNum +")").addClass("numOn")
      $("#slider div.slide:eq(1)").addClass("on")
                            .css({ opacity: 0 })
                            .stop()
       .animate({ opacity: 1 }, function(){
         $("#slider").append($("#slider div.slide:first"))
         $(".marginR:eq(0) div").animate({ opacity: 1 })
         $(".marginR:eq(0) div").children("a").animate({ right: 15 })
         $(".marginR:last div").css({ opacity: 0 })
         $(".marginR:last div").children("a").css({ right: 0 })
         $("#slider div.slide:last").removeClass("on")
       })

    }

    var timer = setInterval(moveSlider, 5000)
    $("#sliderNum span").on("click", function(){
      clearInterval(timer)
      timer = setInterval(moveSlider, 5000)
    })


    // 슬라이드 번호버튼
    $("#sliderNum span").on("click", function(){

      $("#sliderNum span").removeClass("numOn")
      $(this).addClass("numOn");

      var num = $(this).index() + 1;
      var n = num;
      if ( $(".slider" + num).hasClass("on") ){
        return false;
      }
      else {
        $("#slider .slider" + num).stop()
                                  .addClass("on")
                                  .css({ opacity: 0 })
                                  .animate({ opacity: 1 },
          function(){
            $("#slider div.slide").not($(this)).removeClass("on")
            $("#slider").prepend($(this))
            for(var i=0; i<$("#slider div.slide").length-1; i++) {
              n++;
              if( n == 6 ) {
                n = 1;
              }
              $("#slider").append($(".slider" + n))
              $(".marginR:eq(0) div").animate({ opacity: 1 })
              $(".marginR:eq(0) div").children("a").animate({ right: 15 })
              $(".marginR:last div").css({ opacity: 0 })
              $(".marginR:last div").children("a").css({ right: 0 })
            }
          })
      }
    })
   // 제품
   $("#productList li > a").on("click", function(e){
     $("#productList li > a").removeClass("listOn")
     $(this).addClass("listOn")
     $(".productType").css({ marginLeft: 0 })
     $("#productList li div").removeClass("typeOn")
     $("#productList li div").not($(this).next("div")).fadeOut()
     $(this).next("div").fadeIn()
     e.preventDefault()
   })
   // 제품 next버튼
   $(".next").on("click", function(e){
     $(".productType:not(:animated)").stop().animate({ marginLeft: "-=360px" })
     e.preventDefault()
   })
   // 제품 prev버튼
   $(".prev").on("click", function(e){
     if( $(".productType").css("margin-left") == "0px" ){
       $(".productType").css({ marginLeft: 0 })
     }
     else{
       $(".productType:not(:animated)").stop().animate({ marginLeft: "+=360px" })
     }
     e.preventDefault()
   })
   // 제품 호버
   $(".productType dl").hover(
     function(){
       $(this).find(".type1-2").stop().fadeOut();
       $(this).find(".type1-3").stop().fadeIn();
     },
     function(){
       $(this).find(".type1-2").stop().fadeIn();
       $(this).find(".type1-3").stop().fadeOut();
     }
   )
   // color
   $("#colorList li:eq(0) a").on("click", function(e){
     $("#color section").removeClass("active").fadeOut()
     $(".typeBg1").stop().fadeIn()
     e.preventDefault();
   })
   $("#colorList li:eq(1) a").on("click", function(e){
     $("#color section").removeClass("active").fadeOut()
     $(".typeBg2").stop().fadeIn()
     e.preventDefault();
   })
   $("#colorList li:eq(2) a").on("click", function(e){
     $("#color section").removeClass("active").fadeOut()
     $(".typeBg3").stop().fadeIn()
     e.preventDefault();
   })
   $("#colorList li:eq(3) a").on("click", function(e){
     $("#color section").removeClass("active").fadeOut()
     $(".typeBg4").stop().fadeIn()
     e.preventDefault();
   })
   $("#colorList li:eq(4) a").on("click", function(e){
     $("#color section").removeClass("active").fadeOut()
     $(".typeBg5").stop().fadeIn()
     e.preventDefault();
   })
   $("#colorList li:eq(5) a").on("click", function(e){
     $("#color section").removeClass("active").fadeOut()
     $(".typeBg6").stop().fadeIn()
     e.preventDefault();
   })
   // 컬러테라피
   $(".typeTitle1 dd.color1-2").toggle(
        function(){
          $(this).parent("dl").find("dt").animate({ opacity: 0 })
          $(this).parent("dl").next("ul").animate({ opacity: 1, top: 110 })
          $(this).parent("dl").children(".color1-2").children("a").text("-")
        },
        function(){
          $(this).parent("dl").find("dt").animate({ opacity: 1 })
          $(this).parent("dl").next("ul").animate({ opacity: 0, top: 180 })
          $(this).parent("dl").children(".color1-2").children("a").text("+")
        })
    $(".typeTitle2 dd.color1-2").toggle(
         function(){
           $(this).parent("dl").find("dt").animate({ opacity: 0 })
           $(this).parent("dl").next("ul").animate({ opacity: 1, top: 245 })
           $(this).parent("dl").children(".color1-2").children("a").text("-")
         },
         function(){
           $(this).parent("dl").find("dt").animate({ opacity: 1 })
           $(this).parent("dl").next("ul").animate({ opacity: 0, top: 315 })
           $(this).parent("dl").children(".color1-2").children("a").text("+")
         })
     $(".typeTitle3 dd.color1-2").toggle(
          function(){
            $(this).parent("dl").find("dt").animate({ opacity: 0 })
            $(this).parent("dl").next("ul").animate({ opacity: 1, top: 70 })
            $(this).parent("dl").children(".color1-2").children("a").text("-")
          },
          function(){
            $(this).parent("dl").find("dt").animate({ opacity: 1 })
            $(this).parent("dl").next("ul").animate({ opacity: 0, top: 140 })
            $(this).parent("dl").children(".color1-2").children("a").text("+")
          })


})
