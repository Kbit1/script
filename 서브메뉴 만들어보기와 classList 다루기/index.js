$(".listBtn").on("click",function(){
    $(".list-group").toggleClass("show").slidedown()
})

// 모달창 생성,닫기 버튼//
$(".btn-success").on("click",function(){
    $(".black-bg").fadeIn("show")
})

$("#close").on("click",function(){
    $(".black-bg").fadeOut(".black-bg")
})
// 모달창 생성,닫기 버튼//

//전송할때 아이디 비밀번호 공백확인//
$(".btn-primary").on("click",function(e){

    if ( $(".form-control").val()==""){
        alert("아이디를 입력해주세요") , e.preventDefault();
    } else if( $(".form-control").eq(1).val()=="" ){
        alert("비밀번호를 입력해주세요") , e.preventDefault();
    }

})

//전송할때 아이디 비밀번호 공백확인 닫기//