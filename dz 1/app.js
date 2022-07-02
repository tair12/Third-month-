// const  innInput = document.querySelector(".innInput");
// const  innCheck = document.querySelector(".innCheck");
// const  innResult = document.querySelector(".innResult");
//   const innRegExp =/\ 0 \d{13}/;

//   innCheck.addEventListener("click",()=>{
   

//     if(innRegExp.test(innInput.value )){
//       console.log( "ok")
//       }else {
//         console.log( "not ok")
//     }
//   });
 const block = document.querySelector(".block");
 const move = document.querySelector(".move");
 let position = 0;
 const blockMove = ()=>{
   if (position < 460) {
      position += 15;
      block.style.left =`${position}px `
}
 }

 move.addEventListener ("clck" () => {
   blockMove();
 })

