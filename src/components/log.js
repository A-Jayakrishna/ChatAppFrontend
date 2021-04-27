// function SwapDivsWithClick(div1,div2)
// {
//    d1 = document.getElementById(div1);
//    d2 = document.getElementById(div2);
//    if( d2.style.display == "none" )
//    {
//       d1.style.display = "none";
//       d2.style.display = "block";
//    }
//    else
//    {
//       d1.style.display = "block";
//       d2.style.display = "none";
//    }
// }
var log = document.getElementById("login");
var sign = document.getElementById("signup");
var button = document.getElementById("btn");

function signup() {
  log.style.left = "-400px";
  sign.style.left = "50px";
  button.style.left = "110px";
}

function login() {
  log.style.left = "50px";
  sign.style.left = "450px";
  button.style.left = "0px";
}