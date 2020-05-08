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
