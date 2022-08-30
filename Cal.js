
//targetting the Calculator display
let output = document.getElementById("output");

//Main Display funtion to dispay the pressed key value inside the calculator display
function display(num){
    output.value += num;
    console.log(output.value)
}

//Adding display function to all the keys (You can add these functionalities in HTML also, But I want to keep My HTML as much as simple)
document.getElementById("i-1").addEventListener("click",function(){
    display(this.innerText)
})
document.getElementById("i-2").addEventListener("click",function(){
    display(this.innerText)
})
document.getElementById("i-3").addEventListener("click",function(){
    display(this.innerText)
})
document.getElementById("i-4").addEventListener("click",function(){
    display(this.innerText)
})
document.getElementById("i-5").addEventListener("click",function(){
    display(this.innerText)
})
document.getElementById("i-6").addEventListener("click",function(){
    display(this.innerText)
})
document.getElementById("i-7").addEventListener("click",function(){
    display(this.innerText)
})
document.getElementById("i-8").addEventListener("click",function(){
    display(this.innerText)
})
document.getElementById("i-9").addEventListener("click",function(){
    display(this.innerText)
})
document.getElementById("i-0").addEventListener("click",function(){
    display(this.innerText)
})
document.getElementById("i-dot").addEventListener("click",function(){
    display(this.innerText)
})
document.getElementById("i-+").addEventListener("click",function(){
    display(this.innerText)
})
document.getElementById("i--").addEventListener("click",function(){
    display(this.innerText)
})
document.getElementById("i-%").addEventListener("click",function(){
    display(this.innerText)
})
document.getElementById("i-/").addEventListener("click",function(){
    display(this.innerText)
})
document.getElementById("i-*").addEventListener("click",function(){
    display(this.innerText)
})



//Adding functionality to clear Key
document.getElementById("i-eq").addEventListener("click",function(){
   try{
     output.value = eval(output.value);
   }
   catch{
       alert("invalid")
   }
})

//Adding functionality to Delete Key
document.getElementById("clear").addEventListener("click",function(){
    output.value = "";
})
document.getElementById("del").addEventListener("click",function(){
    output.value = output.value.slice(0,-1);
})

