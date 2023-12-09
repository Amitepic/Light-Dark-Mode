const btn = document.querySelector('#btn');
const body = document.querySelector('body');
let flag = true;

btn.addEventListener('click', ()=> {
   if(flag){
     body.style.background = "pink";
     btn.innerHTML = "dark-mode"
     console.log("click");
     flag = false;
   }else{
     body.style.background = "black";
     btn.innerHTML = "light-mode"
     console.log("click");
     flag = true;
   }    
 

 
})

