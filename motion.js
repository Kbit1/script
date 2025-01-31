$(function(){

    // setTimeout(function(){
    //     $(".alert-danger span").text(4)
    // },1000)

    // setTimeout(function(){
    //     $(".alert-danger span").text(3)
    // },2000)

    // setTimeout(function(){
    //     $(".alert-danger span").text(2)
    // },3000)

    // setTimeout(function(){
    //     $(".alert-danger span").text(1)
    // },4000)


    let count = 5 ;

    setInterval(function(){
        count -=1
        if(count>=0){
            $(".alert-danger span").text(count)
        } else {
            $(".alert-danger").hide()
        }
    },1000)


})

//자바스크립트 기초
setTimeout 타이머주는 법 까지 완료 2단계임
