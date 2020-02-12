//main.js
$(function(){
    
    $(".video").fitVids();
    
    /*
    $("<div>&#9776;</div>") .attr("id","btBurger")
                            .css("font-size","2em")
                            .css("color","white")
                            .css("padding","10px 0")
                            .css("cursor","pointer")
                            .click(function(){
                                $("#mainNav ul").toggle();
                            })
                            .prependTo($("#mainNav"));
    
    majMenu();
    
    $(window).resize(function(){
        majMenu();
    });
    */
    
    $('#mainNav').meanmenu({
        meanScreenWidth:500,
        meanMenuClose: "X"
    });
    
})

function majMenu(){
    if(window.matchMedia("(max-width:500px)").matches){
        $("#btBurger").show();
        $("#mainNav ul").hide();
    }else{
        $("#btBurger").hide();
        $("#mainNav ul").show();
    }
}




