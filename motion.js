// $(function(){ //ready

//     /*(누:선택자)(언:이벤트)(처:조작명령어/동작명령어)
        
//             $(“선택자”).mouseover() 선택자로 지정된 대상 태그에 마우스가 올려져 있는 사건 발생
//             $(“선택자”).mousemove() 선택자로 지정된 대상 태그에 마우스가 올려져 있는 상태에서 마우스가 이동하는 사건 발생
//             $(“선택자”).mousedown() 선택자로 지정된 대상 태그에 마우스가 올려져 있는 상태에서 마우스를 누르고 있는 사건 발생
//             $(“선택자”).mouseup() 선택자로 지정된 대상 태그에 마우스가 올려져 있는 상태에서 마우스를 누르고 있는 상태를 취소
//             $(“선택자”).click() 선택자로 지정된 대상 태그를 클릭
//             $(“선택자”).mouseleave(out) 선택자로 지정된 대상 태그에 마우스가 벗어나는 사건 발생
//             $(window).resize()현재 브라우저의 크기에 리사이즈 발생시

//         ※언:이벤트 설정 방법1 - 단일 선택자에 단일 이벤트 적용방식

//             $(“선택자”).이벤트종류(function(){ });


//         ※언:이벤트 설정 방법2  - 동일한 선택자에 다중 이벤트 적용방식

//             $("선택자").on("이벤트종류1 이벤트종류2..",function(){
//             });


//         ※언:이벤트 설정 방법3 - 동일한 선택자에 다중 이벤트 & 다중 명령어 적용방식
//             $("선택자").on({ 
//                 이벤트 종류1: function(){  },
//                 이벤트 종류2: function(){  }
//             });
//     */
//     /*
//         (누).thumb_img의 
//         (언)이미지를 클릭시
//         (처)--------언에 해당하는 이벤트 발생 전까지 명령어 보관함에 대기--------------------------------------   
//             (1조작) .big_view의 src 변경 값에  클릭한 .thumb_img의  첫번째 이미지 "src"속성값을 가져와서 변경 값으로 적용
//             (2조작) .big_view의 alt 변경 값에  클릭한 .thumb_img의  첫번째 이미지 "alt"속성값을 가져와서 변경 값으로 적용
//             (3조작) .img_info의 텍스의 변경 값으로 클릭한 .thumb_img의  첫번째 이미지 "alt"속성값을 가져와서 변경 값으로 적용
//     */
//     /*
//     $(".thumb_img button:eq(0) img").on("click",function(){
//         $(".big_view").attr("src", $(".thumb_img button:eq(0) img").attr("src") );
//         $(".big_view").attr("alt", $(".thumb_img button:eq(0) img").attr("alt") );
//         $(".img_info").text($(".thumb_img button:eq(0) img").attr("alt") );
//     });
//     $(".thumb_img button:eq(1) img").on("click",function(){
//         $(".big_view").attr("src", $(".thumb_img button:eq(1) img").attr("src") );
//         $(".big_view").attr("alt", $(".thumb_img button:eq(1) img").attr("alt") );
//         $(".img_info").text($(".thumb_img button:eq(1) img").attr("alt") );
//     });
//     $(".thumb_img button:eq(2) img").on("click",function(){
//         $(".big_view").attr("src", $(".thumb_img button:eq(2) img").attr("src") );
//         $(".big_view").attr("alt", $(".thumb_img button:eq(2) img").attr("alt") );
//         $(".img_info").text($(".thumb_img button:eq(2) img").attr("alt") );
//     });
//     */
//     /*
//         $(".thumb_img img").on("click",function(){
//             var bv = [ $(this).attr("src"), $(this).attr("alt")];
//             $(".big_view").attr("src", bv[0] ).attr("alt", bv[1] );
//             $(".img_info").text( bv[1] );
//         });
//     */
    
//     /* [★★★] This – travel(탐색)   *이벤트를 발생시킨 대상 태그 호출
//         $(this)이벤트를 발생시킨 대상 태그 호출
//         $(this).next()이벤트를 발생시킨 대상 태그의 다음 작성된 태그 호출
//         $(this).parent()이벤트를 발생시킨 대상 태그의 부모 태그 호출
//         $(this).children()이벤트를 발생시킨 대상 태그의 자 식태그 호출
//         $(this).find()이벤트를 발생시킨 대상 태그내에 특정 태그를 찾아줍니다.


//         $(".a").on("click",function(){  
//             $(this)                                    <div class="a">
//             $(this).children()                         <p></p>
//             $(this).children().children()              <b></b>  <u></u>
//             $(this).children().children("u")           <u></u>
//             $(this).children("p:eq(0)").children("u")  <u></u>

//             $(this).find("p:eq(0) u");
//         });


//         <div class="a">  ------------------------------------ $(this)  
//             <p> --------------------------------------------- $(this).children()
//                 <b>첫번째</b> 문단 <u>태그</u> 입니다.
//             </p>
//             <p> --------------------------------------------- $(this).children()
//                 <b>두번째</b> 문단 <u>태그</u> 입니다.
//             </p>
//         </div>



//         $(".a p:eq(0)").on("click",function(){  
//             $(this) 
//             $(this).next()
//             $(this).prev()
//             $(this).next().children()
//             $(this).parent()
//         });


//         <div class="a">

//             <p>   ------------------------------------ $(this)  
//                 <b>첫번째</b> 문단 <u>태그</u> 입니다.
//             </p>

//             <p>  ------------------------------------ $(this).next()  
//                 <b>두번째</b> 문단 <u>태그</u> 입니다.
//             </p>
//         </div>
//     */

//     $(".thumb_img img").on("click",function(){        
//         $(".big_view").attr("src", $(this).attr("src") );
//         $(".big_view").attr("alt", $(this).attr("alt") );
//         $(".img_info").text( $(this).attr("alt") );
//     });

//     $(".test6").css({ display:"none"});

//     //1. (누).gnb영역의 하위메뉴 ul을 (처)안보이게 해주세요.
//     $(".gnb ul").css({ display:"none"});

//     /*2. (누).gnb영역의 대메뉴를 
//          (언)클릭시
//          (처)------언에 해당하는 이벤트 발생 전까지 명령어 보관함에 대기--  

//             만약에 클릭한 대메뉴의 하위메뉴의 출력 상태가 display:none 일 경우
//                 :하위메뉴 ul을 안보이게 해주세요
//                 :클릭한 대메뉴의 하위메뉴 ul을 보이게 해주세요.
//             그렇지 않을경우
//             :클릭한 대메뉴의 하위메뉴 ul을 안보이게 해주세요.
//      */
//          $(".gnb>li>a").on("click",function(){
//             var a = $(this).next().css("display"); // none, block;
//             if( a == "none" ){
//                 $(".gnb ul").css({ display:"none"});
//                 $(this).next().css({ display:"block"});
//             }else{
//                 $(this).next().css({ display:"none"});
//             };            
//         });
    

//    /*2.  (누).test9영역의 버튼을  
//          (언)마우스 오버시
//          (처)------언에 해당하는 이벤트 발생 전까지 명령어 보관함에 대기--

//            문단 p태그의 margin-top값을 100px
//            오버한 버튼의 다음 p태그의 margin-top값을 0
 

//          (누).test9영역의 li에 마우스가 벗어났을시  
//             문단 p태그의 margin-top값을 100px
//      */

//         $(".test9 button").on("mouseover",function(){
//             $(".test9 p").animate({ marginTop: "100px" });
//             $(this).next().animate({ marginTop: 0 });
//         });

//         $(".test9 button").on("mouseleave",function(){
//             $(".test9 p").animate({ marginTop: "100px" });
//         });


// }); //ready

// $(".s1 li:eq(0)").show(600,function(){
//     $(".s1 li:eq(1)").show(800,function(){
//         $(".s1 li:eq(2)").show(1000);
//     })
// })


$(function(){ //ready

    $(".s1 li").css({display:"none"}); /* width height opacity 가 none 처리 */


    $(".s1 button").on("click",function(){


        $(".s1 li:eq(0)").stop().toggle(600,function(){
            $(".s1 li:eq(1)").toggle(800,function(){
                $(".s1 li:eq(2)").toggle(1000);
            })
        })
    })




//          $(".gnb>li>a").on("click",function(){
//             var a = $(this).next().css("display"); // none, block;
//             if( a == "none" ){
//                 $(".gnb ul").css({ display:"none"});
//                 $(this).next().css({ display:"block"});
//             }else{
//                 $(this).next().css({ display:"none"});
//             };            
//         });

    $("dd:not(:first)").hide();


    $("dt").on("click",function(){
        $(this).next("dd").slideToggle();
    });

    $("dt").on("click",function(){
        $("dd").stop().slideUp();
        $(this).next().stop().slideToggle();
    })


    

    $(".s3 li").hide();

    $(".s3 button:eq(0)").on("click",function(){
        $(".s3 li").stop().fadeIn("fast");
    })

    $(".s3 button:eq(1)").on("click",function(){
        $(".s3 li").stop().fadeOut("fast");
    })

    $(".s3 button:eq(2)").on("click",function(){
        $(".s3 li").stop().fadeTo("fast",0.2);
    })

    $(".s3 button:eq(3)").on("click",function(){
        $(".s3 li").stop().fadeTo("fast",0.5);
    })

    $(".s3 button:eq(4)").on("click",function(){
        $(".s3 li").stop().fadeTo("fast",0.7);
    })

    // $(".s4").animate({width:"300px" , height:"200px" , margin:"200px 0 0 200px" , padding:"20px 0 50px 100px" , fontSize:"40px" , letterSpacing:"30px"})



    $(".s4").animate({width:"300px" , height:"300px" , background:"#d9d9d9"},1500,function(){
        $(this).animate({width:"600px" , height:"600px" , color:"green"},2000,function(){
            $(this).animate({padding:"150px" , margin:"250px" , width:"100px" , fontSize:"30px"},2000)
        })
    })



});


$(function(){

    $(".vision img").css({marginLeft:"300px" , opacity:0});
    $(".vision div p:eq(0)").css({marginTop:"130px" ,opacity:0});
    $(".vision div p:eq(1)").css({marginTop:"50px" ,opacity:0});

    $(".vision img").animate({marginLeft:"0" , opacity:1},"normal",function(){
        $(".vision div p:eq(0)").animate({marginTop:"0px" ,opacity:1},"normal",function(){
            $(".vision div p:eq(1)").animate({marginTop:"0px" ,opacity:1},"normal");
        });
    });


    
});



