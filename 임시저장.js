$(function(){

    let count = 0;
$(".slideBtn1 button img:eq(1)").on("click",function(){

    if(count==0){
        $(".slide").animate({marginLeft:"-20%"})
        $(".slide li").animate({marginTop:"50px"})
        $(".slide li:eq(1)").stop().animate({marginTop:0});
        count = 1
    } else if(count==1){
        $(".slide").animate({marginLeft:"-40%"})
        $(".slide li").animate({marginTop:"50px"})
        $(".slide li:eq(0)").stop().animate({marginTop:"50px"});
        $(".slide li:eq(2)").stop().animate({marginTop:0});
        console.log("ㅎㅇ")
    }




    console.log("실행됨")
})


})
