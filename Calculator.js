  
 var s=document.getElementById('getValue').value;

function number(args){
    num=args.id;
   document.getElementById('getValue').value+=num;
   flagOp=0;

}

function equal(){
  var s=document.getElementById('getValue').value;
  result=eval(s);
   document.getElementById('getValue').value=result;
  

}
 
let flagD=0;
let flagOp=0;
function operator(op){
  
    var txt=document.getElementById('getValue').value;
    //alert(txt);
    if(op=="-" || op=="+" || op=="*" || op=="/" || op=="%")
    {
        flagOp++;
        if(flagOp==1 && txt.trim()!==""){
            if(op=="-")
            {
                document.getElementById('getValue').value+="-";
               
            }
            if(op=="+")
            {
                document.getElementById('getValue').value+="+";
               
            }
            if(op=="%")
            {
                document.getElementById('getValue').value+="%";
               
            }
            if(op=="*")
            {
                document.getElementById('getValue').value+="*";
              
            }
            if(op=="/")
            {
                document.getElementById('getValue').value+="/";
               
            }
           
        } 
        flagD=0; 
    
    }
    else{
     flagOp=0;
    }
    
}

function dot(){
    flagD++;
    if(flagD==1)
    {
        document.getElementById('getValue').value+=".";
    }
    else{
        return;
    }
}
function circle(){
  
        document.getElementById('container').style.background = "orangered";
        const nodeList = document.querySelectorAll(".orange");
        for (let i = 0; i < nodeList.length; i++) {
         nodeList[i].style.backgroundColor = "orangered";
        
     }
       
}
function circle2(){
  
    document.getElementById('container').style.background = "red";
    const nodeList = document.querySelectorAll(".orange");
   for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].style.backgroundColor = "red";
   
}
}
function circle3(){
  
    document.getElementById('container').style.background = "yellow";
    const nodeList = document.querySelectorAll(".orange");
   for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].style.backgroundColor = "yellow";
    nodeList[i].style.color="black";
   
}
}
function cut()
{
 var s=document.getElementById('getValue').value;
 s=s.slice(0,s.length-1);
 document.getElementById('getValue').value=s;
}
function c(){
    document.getElementById('getValue').value="";
}