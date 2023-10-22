const add = function(p1,p2) {
  return parseInt(p1) + parseInt(p2);
	
};

const subtract = function(p1,p2) {
	return parseInt(p1) - parseInt(p2);
};

const sum = function(arr) {
  // this was my original
  // let total = 0;
	// for(let i = 0; i < arr.length; i++){
  //   total += arr[i];
  // }
  // return total;

  // this is the same calculation using .reduce!!
  return arr.reduce((total, current) => total + current);

};

const multiply = function(arr) {
  // this was my fist attempt when I didn't know about array.reduce()
  // let total = 1;
  // for(let i = 0; i < arr.length; i++){
  //   //console.log(arr[i]);
  //   total *= parseInt(arr[i]);
  // }
  // return total;

  // this is an expanded view of a reducer function.
  // see https://www.w3schools.com/jsref/jsref_reduce.asp
  //total/accumulator and currentValue are mandatory in a reducer function.
  // function reducer(accumulator, currentValue, index) {
  //   const returns = accumulator * currentValue;
  //   console.log(
  //     `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
  //   );
  //   return returns;
  // }
  // arr.reduce(reducer);

  //this is the same function as an anonymous arrow function
  const response = arr.reduce((total, currentValue) => total * currentValue);
  console.log(response);
  return response;
};

multiply([2, 4, 6, 8, 10, 12, 14]);
// [2, 4, 6, 8, 10, 12, 14])).toBe(645120)

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



// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
