const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bl')
const ele=document.getElementById('.mybar')

let load = 0
let i=0;

let int = setInterval(blurring, 30)

function blurring() {
  load++

  if (load > 99) {
    clearInterval(int)
  }

  loadText.innerText = `${load}%`
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`

}
function move(){
  if(i==0){
    i=1;
  let width=1;
  let id=setInterval(frame,10);
  function frame()
{
  if(width>=100){
    clearInterval(id);
    i=0;
  }
  else{ width++;
  ele.style.width=width+"%";}
}
}
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min}