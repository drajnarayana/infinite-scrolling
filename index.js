let infinite=document.getElementById("infinite")
let ul=document.getElementById('ul')

var next=1;
var load=()=>{
    for(var i=0;i<25;i++){
        let item=document.createElement("li");
        item.innerText="Masai School" +" "+next++
        ul.append(item)
        
    }
}
infinite.addEventListener('scroll',function(){
  if(infinite.scrollTop + infinite.clientHeight >= infinite.scrollHeight){
     load()
    }
})
    

load()