let move=document.querySelector(".circle");
let step=10;
window.addEventListener('load',()=>{
    move.style.position='absolute';
    move.style.left=0;
    move.style.top=0;
})

// move.addEventListener("keypress",function(event){
//     console.log(event);
// });
// document.onkeyup=function(e){
//     console.log("salam");
// }

window.addEventListener('keydown',(e)=>{
    switch (e.key) {
        case 'ArrowLeft':
            move.style.left=parseInt(move.style.left)-step+"px";
            break;
        case 'ArrowRight':
            move.style.left=parseInt(move.style.left)+step+"px";
            break;
        case 'ArrowUp':
            move.style.top=parseInt(move.style.top)-step+"px";
            break;
        case 'ArrowDown':
            move.style.top=parseInt(move.style.top)+step+"px";
            break;
    }
})