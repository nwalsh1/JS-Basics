//10c
console.log(
document.querySelector(".js-button").classList.contains("js-button")
);

//10d and e
function clickButton(className) {
  const gamingElement = document.querySelector("." + className);
  if (gamingElement.classList.contains("is-toggled")) {
   gamingElement.classList.remove("is-toggled");
  } else {
    gamingElement.classList.add("is-toggled");
  }
}
      
//10g
let lastClass = '';
function exclusiveClickButton(className){
  //turn off prevoius button
  if(lastClass && lastClass !== className){
    document.querySelector("." + lastClass).classList.remove('is-toggled');
  }
  clickButton(className);
  lastClass = className;
}

//10h
function handleCostKeydown(event) {
  if (event.key === "Enter") {
    calculateTotal();
  }
}

function calculateTotal() {
  const inputElement = document.querySelector(".js-cost-input");
  const cost = Number(inputElement.value); 
  const resultElement = document.querySelector(".js-result");
  resultElement.classList.remove('red-text');

  if(cost < 0){
    resultElement.innerHTML = 'Error: cost cannot be less than $0'
    resultElement.classList.add('red-text');
  }else if (cost < 40) {
    resultElement.innerHTML = "$" + (cost + 10);
  } else {
    resultElement.innerHTML = "$" + cost;
  }
}