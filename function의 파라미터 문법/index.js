// 모달창창 열기닫기
function alertbox(show){
    $(".alert-box").css({display:show})
}

$("button").on("click",function(){
    alertbox("block")
})

$(".btn-close").on("click",function(){
    alertbox("none")
})
//모달창 종료

// 알림창 텍스트 변경해보기//
$(".btn1").on("click",function(){
    $(".alert-box").text("아이디를 입력하세요")
})
$(".btn2").on("click",function(){
    $(".alert-box").text("비밀번호를 입력하세요")
})