const innerDisplay = document.getElementById('inner-display');
const aboveDisplay = document.getElementById('above-display');
const numbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operators');
const clearAll = document.getElementById('clear-all');
const clearLast = document.getElementById('clear-last');
const clearLastOperation = document.getElementById('clear-last-operator');
const equals = document.getElementById('equals');



for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', function(e) {
    innerDisplay.innerHTML = innerDisplay.innerHTML + e.target.innerHTML
  });
  document.addEventListener('keypress', function(e) {
    if (e.key === numbers[i].innerHTML) {
      innerDisplay.innerHTML = innerDisplay.innerHTML + e.key
    };
  });
};


for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener('click', function(e) {
    aboveDisplay.innerHTML = ' ' + aboveDisplay.innerHTML + ' ' +  innerDisplay.innerHTML + ' ' + e.target.innerHTML;
    innerDisplay.innerHTML = '';
  });
  document.addEventListener('keypress', function(e) {
    if (e.key === operators[i].innerHTML) {
      aboveDisplay.innerHTML = ' ' + aboveDisplay.innerHTML + ' ' +  innerDisplay.innerHTML + ' ' + e.key;
      innerDisplay.innerHTML = '';
    };
  });
};

equals.addEventListener('click', function(e) {
  aboveDisplay.innerHTML = ' ' + aboveDisplay.innerHTML + ' ' +  innerDisplay.innerHTML;
  innerDisplay.innerHTML = eval(aboveDisplay.innerHTML);
  aboveDisplay.innerHTML = ' ';
});

document.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    aboveDisplay.innerHTML = ' ' + aboveDisplay.innerHTML + ' ' +  innerDisplay.innerHTML;
    innerDisplay.innerHTML = eval(aboveDisplay.innerHTML);
    aboveDisplay.innerHTML = ' ';
  };
});

clearAll.addEventListener('click', function(e) {
  aboveDisplay.innerHTML = ' ';
  innerDisplay.innerHTML = ' ';
});

document.addEventListener('keypress', function(e) {
  if (e.key === "Delete") {
    aboveDisplay.innerHTML = ' ';
    innerDisplay.innerHTML = ' ';
  };
});

clearLast.addEventListener('click', function(e) {
  innerDisplay.innerHTML = innerDisplay.innerHTML.slice(0,-1);
});

document.addEventListener('keypress', function(e) {
  if (e.key === "Backspace") {    
    innerDisplay.innerHTML = innerDisplay.innerHTML.slice(0,-1);
  };
});

clearLastOperation.addEventListener('click', function(e) {
  aboveDisplay.innerHTML = aboveDisplay.innerHTML.slice(0,-1);
});