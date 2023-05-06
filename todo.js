let al=document.getElementById("btn");
// al.addEventListener('click',y);
function func(){

   

    let dv=document.createElement("div")
    dv.className="main";
    // dv.className="main";
    
    let inpval=document.getElementById("task").value;
    setTimeout(async()=>{
        
        alert(`your TODO task '${inpval}' is added \n Do it before Deadline!`)
        
    },200)
  let dm=`
  <div class="child1">${document.getElementById("task").value}</div>
  <div  class="child2"><i  class="fa-sharp fa-solid fa-trash"></i></div>`

 dv.innerHTML=dm;
 if(inpval===' ')alert("pls fill something")
    else {
        document.getElementById("store").appendChild(dv);
    }
    var i;
    var close=document.getElementsByClassName("child2")
    for(i=0;i<close.length;i++){
        close[i].onclick=function(){
            var div=this.parentElement;
            var itms=this.parentElement.firstElementChild.textContent
            var con=confirm(`sure you want to delete this  "${itms}" task`)
            // div=div.parentElement;
            if(con===true)
            div.style.display="none";
        }
    }

   
    document.getElementById("task").value="";
}


let list=document.getElementById("store");
list.addEventListener('click',function(e){
//    if( e.target.tagName==='LI'){
   if( e.target.className==="child1"){
    alert("congratulation")
    e.target.classList.toggle("checked")
    
   }
},false);