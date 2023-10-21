const add = function(p1,p2) {
  return parseInt(p1) + parseInt(p2);
	
};

const subtract = function(p1,p2) {
	return parseInt(p1) - parseInt(p2);
};

const sum = function(arr) {
  let total = 0;
	for(let i = 0; i < arr.length; i++){
    total += arr[i];
  }
  return total;
};

const multiply = function(arr) {
  let total = 1;
  for(let i = 0; i < arr.length; i++){
    //console.log(arr[i]);
    total *= parseInt(arr[i]);
  }
  return total;
};

const power = function(p1,p2) {
  return parseInt(p1) ** parseInt(p2);
	
};

const factorial = function(fact) {
  if(fact === 0) return 1;

  let res = fact;
	for(let i = fact - 1; i >= 1; i--){
    res *= i;
    //console.log(res);
  }
  return res
};

factorial(4)

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
