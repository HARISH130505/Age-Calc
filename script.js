var dmy =document.getElementById("dmy");
var btn = document.getElementById("btn");
var dt =document.getElementById("dt");
var mn =document.getElementById("mn");
var yr =document.getElementById("yr");

function calc(){
var inputDate = new Date(dmy.value);
var today = new Date();

var days = today.getDate() - inputDate.getDate();
var months = today.getMonth() - inputDate.getMonth();
var years = today.getFullYear() - inputDate.getFullYear();

dt.textContent = days;
mn.textContent = months;
yr.textContent =years;
}
