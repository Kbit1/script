$(function(){


$("#btn").on("click",function(e){
    let array = [1,2,3];
    array.forEach(function(a){
        console.log(this)
    });

})


let object = {
    name : ["Lee","Kim","Park"] , 
    math : function(){
        // console.log(this);
        object.name.forEach(()=>{
            console.log(this);
        })
    }
}

object.math()

})
