$(function(){

    let count = 0;
    let totalcount = 3;

    function slide(index){
        $(".imgwrap").stop().animate({marginLeft:`-${count*100}%`},1000)
    }
    
$(".slide-1").on("click",()=>{
    count=0
    slide()
})

$(".slide-2").on("click",()=>{
    count=1
    slide()
})

$(".slide-3").on("click",()=>{
    count=2
    slide()
})

    $(".next").on("click",()=>{
        count++
        if(count>=totalcount){
            count=0
        }
        slide()
    })




})

//코드를 잘 정리해보고 이해 다시해보기 그리고 이전으로 가기 만들어보기 //코드 3줄로 캐러셀 (이미지 슬라이드) 만들기 2
// 2월3일 git 에 대해서 공부완료 조금더 파보기
