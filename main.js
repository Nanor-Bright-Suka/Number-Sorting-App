

 //Getting Started With Ids and Classes

     const inputBox = document.getElementById("inputBox");
     const button = document.querySelector(".button");
     const clear = document.querySelector(".clear");
     button.addEventListener("click",ImmFunc);
         function ImmFunc(){
         const res =  inputBox.value.split(",");
     const ans = res.sort((a,b) => a - b);
     const reply = ans.join();
      if(inputBox.value === ""){
         alert("Please Enter Some Number");   
      }else{
         inputBox.value = `${inputBox.value}  = ${reply}`;
        
      }
            
         }
         clear.addEventListener("click",()=> {
        
         const inputBox = document.getElementById("inputBox");
         inputBox.value = "";

         })
    

