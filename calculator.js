// var add=document.getElementById("myBtn1");
// var sub=document.getElementById("myBtn2");
// var multi=document.getElementById("myBtn3");
// var div=document.getElementById("myBtn4");
var result=document.getElementById("answer");
const plus = () => {
    let a=parseInt(document.getElementById('first').value);
    let b=parseInt(document.getElementById('second').value);
    let addition= a + b;
   result.value=addition;

}
function minus(){
    let a=parseInt(document.getElementById('first').value);
    let b=parseInt(document.getElementById('second').value);
    let substraction= a - b;
   result.value=substraction;

}
function multiply(){
    let a=parseInt(document.getElementById('first').value);
    let b=parseInt(document.getElementById('second').value);
    let multiplication = a * b;
   result.value=multiplication;

}
function division(){
    let a=parseInt(document.getElementById('first').value);
    let b=parseInt(document.getElementById('second').value);
    division = a / b;
   result.value=division;

}