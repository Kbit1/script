// 모달창창 닫기
function alertbox(show){
    $(".alert-box").css({display:show})
}

$(".btn-close").on("click",function(){
    alertbox("none")
})
//모달창 종료

// 알림창 텍스트 변경해보기//
function idAlert(show){
    $("#title").text(show)
}

$(".btn1").on("click",function(){
    alertbox("block") , idAlert("아이디를 입력하세요")
})
$(".btn2").on("click",function(){
    alertbox("block") , idAlert("비밀번호를 입력하세요")
})
// 알림창 텍스트 변경해보기 종료//


