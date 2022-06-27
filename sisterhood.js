var button = document.querySelector('button');

var box = document.getElementById('changeMe');

var popup = document.getElementById("myPopup");


function changeColor(){
    if(box.style.background == green){
        box.style.background = blue ;
    }else{
        box.style.background = green ;
    }
} 

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }