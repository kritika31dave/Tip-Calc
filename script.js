function myCalc(){
    var amount=document.getElementById("amnt").value;
    var people=document.getElementById("people").value;
    var option=document.getElementById("option").value;
    if(amount == "" || option ==0){
        window.alert("Please enter some values to get this baby up and running!");
    return;
    }
    if(people=="" || people<=1){
        people=1;
        document.getElementById("each").style.display="none";
    }else{
        document.getElementById("each").style.display="block";
    }
    var total=(amount*people)/option;
    total=Math.round(total*100)/100;
    total= total.toFixed(2);
    document.getElementById("cont1").style.display="block";
    document.getElementById("demo").innerHTML=total;
}
document.getElementById("each").style.display="none";
document.getElementById("cont1").style.display="none";
document.getElementById("calculate").onclick=function(){myCalc();};