function AdditionNum(){
    let num1=document.getElementById('firstbox').value;
    let num2=document.getElementById('secondbox').value;
    num1=parseInt(num1);
    num2=parseInt(num2);
    alert(num1+num2)

}
function SubtractionNum(){
    let num1=document.getElementById('firstbox').value;
    let num2=document.getElementById('secondbox').value;
    num1=parseInt(num1);
    num2=parseInt(num2);
    let h1=document.getElementById('result')
    result=num1-num2
    h1.innerHTML="Result:"+result

}
function MultiplicationNum(){
    let num1=document.getElementById('firstbox').value;
    let num2=document.getElementById('secondbox').value;
    num1=parseInt(num1);
    num2=parseInt(num2);
    alert(num1*num2)

}
function DivisionNum(){
    let num1=document.getElementById('firstbox').value;
    let num2=document.getElementById('secondbox').value;
    num1=parseInt(num1);
    num2=parseInt(num2);
    alert(num1/num2)

}
function PowerNum(){
    let num1=document.getElementById('firstbox').value;
    let num2=document.getElementById('secondbox').value;
    num1=parseInt(num1);
    num2=parseInt(num2);
    alert(num1**num2)

}
