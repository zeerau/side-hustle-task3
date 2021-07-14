let increment = document.querySelector("#increment");
let decrement = document.querySelector("#decrement");
let counterValue = document.querySelector("#counterValue");

let counter = 0;

increment.addEventListener("click" , ()=>{
  if(counter < 50){
  counter += 1;
    counterValue.innerHTML = counter;

  }
})
;
decrement.addEventListener("click" , ()=>{
  if(counter > 0){
  counter -= 1;
      counterValue.innerHTML = counter;
  }
});


/* let add = document.getElementById('increment');
let remove = document.getElementById('decrement');

let int = document.getElementById('display');
let integer;

integer = 0;

add.addEventListener('click', function(){
  if(integer < 50){
    integer += 1;
    int.innerHTML = integer;

  }
});

remove.addEventListener('click', function(){
  if(integer > 0){
    integer -= 1;
      int.innerHTML = integer;
  }
});0/2*/
