let tensDigit = document.querySelector("#secondTens");
let onesDigit = document.querySelector('#secondOnes');
let hundredthsDigit = document.querySelector('#msHundreds');
let tenthsDigit = document.querySelector('#msTens');
               

tenthsDigit.textContent = 0;
function tenthsCounters(){
  tenthsDigit.textContent = parseInt(tenthsDigit.textContent) + 1;
  if(tenthsDigit.textContent > 9){
    tenthsDigit.textContent = 0;}
  }
  setInterval(tenthsCounters, 10)

hundredthsDigit.textContent = 0;
function hundredthsCounters(){
  hundredthsDigit.textContent = parseInt(hundredthsDigit.textContent) + 1;
  if(hundredthsDigit.textContent > 9){
    hundredthsDigit.textContent = 0;}
  } 
setInterval(hundredthsCounters, 100)

let DigitsArray = [tensDigit, onesDigit, hundredthsDigit, tenthsDigit];
onesDigit.textContent = 0;

function onesDigitCounters(){
  onesDigit.textContent = parseInt(onesDigit.textContent) + 1;
  if(onesDigit.textContent > 9){
    onesDigit.textContent = 0;
    tensDigit.textContent = 1;
    DigitsArray.forEach((digitPlace) => {
      digitPlace.style.color = 'red';
    })
  }else{ 
    tensDigit.textContent = 0;
    DigitsArray.forEach((digitPlace) => {
      digitPlace.style.color = 'black';
    })
  }
}
setInterval(onesDigitCounters, 1000)
