$(function(){
    // 多级菜单

    $(".main-left>ul>li").mouseover(function(){
        $(this).find(".sub-menu").show().siblings().find(".sub-menu").hide();
     
       
    })
    $(".main-left>ul>li").mouseout(function(){
     
        $(this).find(".sub-menu").hide();
    
   
    })


    $(".course-list li").mouseover(function() {
        $(this).css("top","-10px"); 
    
    })
    $(".course-list li").mouseout(function() {
        $(this).css("top","0") ; 
    })


    

})