$(function(){

console.log("실행확인")

$("#btn").on("click",function(e){

    let 어레이 = [1,2,3];
    어레이.forEach(function(a){
        console.log(this)
    });
})


let 오브젝트 = {
    이름:["김","이","박"], 함수 :function(){

        오브젝트.이름.forEach(()=>{
            console.log(this)
        })
    }
}
오브젝트.함수();

});
this 키워드를 알아보자 2. event listener와 constructor
