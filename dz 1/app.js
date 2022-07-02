const  innInput = document.querySelector(".innInput");
const  innCheck = document.querySelector(".innCheck");
const  innResult = document.querySelector(".innResult");
  const innRegExp =/\ 0 \d{13}/;

  innCheck.addEventListener("click",()=>{
   

    if(innRegExp.test(innInput.value )){
      console.log( "ok")
      }else {
        console.log( "not ok")
    }
  });