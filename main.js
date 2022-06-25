console.log('Hello World!');


/*

for (var i = 0; i < 100; i++) {
  document.write('🤫🤫🤫🤫🤫🤫🤫🤫🤫🤫')
}*/



function search(){
  var a = document.getElementById('sr');
  var b = document.getElementById('kj');

  a.classList.toggle('css_sr');


 b.classList.toggle('bg');
  
 
}


function se(){
  
 var a = document.getElementById('sr');
 
  a.classList.toggle('css_sr');


 document.getElementById("input").value="";
 
}


function soe(){

var b = document.getElementById('input').value;

 var a = document.getElementById('sr');
 

  a.classList.toggle('css_sr');
 
 document.getElementById('taytal'). innerText = ' Search result : '+ b;
 
 
  
  
  
}


function vpb(){

var a = document.getElementById('kro');
var b = document.getElementById('v_p');

a.classList.toggle('NFL');

b.classList.toggle('bg');
  
  
  
}




function menu(){
  var a = document.getElementById('hi');
  var b = document.getElementById('meno_icon');
  
  a.classList.toggle('hidan_menu_');

  b.classList.toggle('bg');



  
}


