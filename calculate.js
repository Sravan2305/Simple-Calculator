import './edit.scss';
var equals =0;
var a=0;

document.getElementById("one").addEventListener("click" , one)
function one()
{ 
    document.getElementById("text").value  =  document.getElementById("text").value*10 + 1;
    console.log(document.getElementById("text").value);
}
document.getElementById("two").addEventListener("click" , two)
function two()
{ 
    document.getElementById("text").value  =  document.getElementById("text").value*10 + 2;
    console.log(document.getElementById("text").value);
}
document.getElementById("three").addEventListener("click" , three)
function three()
{ 
    document.getElementById("text").value  =  document.getElementById("text").value*10 + 3;
    console.log(document.getElementById("text").value);
}
document.getElementById("four").addEventListener("click" , four)
function four()
{ 
    document.getElementById("text").value  =  document.getElementById("text").value*10 + 4;
    console.log(document.getElementById("text").value);
}
document.getElementById("five").addEventListener("click" , five)
function five()
{ 
    document.getElementById("text").value  =  document.getElementById("text").value*10 + 5;
    console.log(document.getElementById("text").value);
}
document.getElementById("six").addEventListener("click" , six)
function six()
{ 
    document.getElementById("text").value  =  document.getElementById("text").value*10 + 6;
    console.log(document.getElementById("text").value);
}
document.getElementById("seven").addEventListener("click" , seven)
function seven()
{ 
    document.getElementById("text").value  =  document.getElementById("text").value*10 + 7;
    console.log(document.getElementById("text").value);
}
document.getElementById("eight").addEventListener("click" , eight)
function eight()
{ 
    document.getElementById("text").value  =  document.getElementById("text").value*10 + 8;
    console.log(document.getElementById("text").value);
}
document.getElementById("nine").addEventListener("click" , nine)
function nine()
{ 
    document.getElementById("text").value  =  document.getElementById("text").value*10 + 9;
    console.log(document.getElementById("text").value);
}
document.getElementById("zero").addEventListener("click" , zero)
function zero()
{ 
    document.getElementById("text").value  =  document.getElementById("text").value*10 + 0;
    console.log(document.getElementById("text").value);
}

document.getElementById("plus").addEventListener("click" , plus)
function plus()
{ 
    a = document.getElementById("text").value;
    equals =1;
    document.getElementById("text").value =0;
}
document.getElementById("minus").addEventListener("click" , minus)
function minus()
{ 
    a = document.getElementById("text").value;
    equals =2;
    document.getElementById("text").value =0;
}
document.getElementById("multiply").addEventListener("click" , multiply)
function multiply()
{ 
    a = document.getElementById("text").value;
    equals =3;
    document.getElementById("text").value =0;
}
document.getElementById("divide").addEventListener("click" , divide)
function divide()
{ 
    a = document.getElementById("text").value;
    equals =4;
    document.getElementById("text").value =0;
}
document.getElementById("equal").addEventListener("click" , equal)
function equal(){
    if(equals==1) document.getElementById("text").value = parseInt (a)+ parseInt(document.getElementById("text").value);
    else if(equals==2) document.getElementById("text").value = parseInt (a)- parseInt(document.getElementById("text").value);
    else if(equals==3) document.getElementById("text").value = parseInt (a)* parseInt(document.getElementById("text").value);
    else if(equals==4) document.getElementById("text").value = parseInt (a)/ parseInt(document.getElementById("text").value);
    else document.getElementById("text").value =0;
    equals=0
    a=0
} 
document.getElementById("clear").addEventListener("click" , clear)
function clear(){
    equals=0;
    a=0;
    document.getElementById("text").value =0;
}
