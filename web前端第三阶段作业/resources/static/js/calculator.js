$(function () {
        
var table = document.getElementsByClassName("table")[0];
var  calIn = document.getElementsByClassName("calc-in")[0];
var calcOut = document.getElementsByClassName("calc-out")[0];
var devPointc = false //表示是否有小数点
var tempResult =0;

table.onclick = function(e){
        var text = e.target.innerHTML;
        if(text =="x"){
                text =text.replace(/x/g,'*'); 
        }
        if(text =="÷"){
                text =text.replace(/÷/g,'/'); 
        }
         if((text != "=") && (text !="CE") && (text !=" C") && (text != "←")){
                calIn.innerHTML+=text; 
                console.log(calIn.innerHTML)
        }

        if(text == "="){
                var tempResult =eval(calIn.innerHTML);
                var result =eval(tempResult)+'';
                console.log(result);
                calcOut.innerHTML =result+'';
        }else if(text =="C"){
                calIn.innerHTML ="";
                calcOut.innerHTML= 0;  
        }
        
    }
})
