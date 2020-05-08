/* Menu buttons */
function openMenu() {
    $("#menu").css("width","25%");
    $(".main").css("marginLeft","25%");
}

function closeMenu() {
    $("#menu").css("width","0%");
    $(".main").css("marginLeft","0%");
}

/* collapse */
$(document).ready(function()
{                
      $("#detials .parg:first").css("display","block");
    $("#details h3").click(function(){      
        $(this).next().slideToggle(500);
         $(".parg").not($(this).next()).slideUp(500);     
    });              
});

/* counter */
function countdown(){
    var today = new Date();
    var eventDate = new Date(2020, 12, 17);
    var currentTime = today.getTime();
    var eventTime = eventDate.getTime();
    var remainTime = eventTime - currentTime;
    var s = Math.floor(remainTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24)-30;

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    $("#days").text(  d + " D");
    $("#hours").text(  h + " H");
    $("#minutes").text(  m + " M");
    $("#seconds").text(  s + " S");
    setTimeout(countdown, 1000);
}

countdown();

/* char */

let maxChar = 100;
$("textarea").keyup(function(){
   let lenghtOfChar =$(this).val().length;
   let remainChar = maxChar - lenghtOfChar ;
   if(remainChar >= 0)
   {
     $("#char").text(remainChar)
   }
   else
   {
     $("#char").text("your available character finished");
   }
})


/************** top scroll jss */
$("a").click(function(){
    
    var sectionId= $(this).attr("href");
    
    var positionOfSection = $(sectionId).offset().top;
    
    $("html , body").animate({scrollTop:positionOfSection},2000);
    
})