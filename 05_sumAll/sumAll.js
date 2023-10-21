const sumAll = function(from, to) {
    // catch negative numbers
    if(from < 0 || to < 0) return "ERROR";

    // catch non-numbers
    if(typeof(from) != "number" || typeof(to) != "number") return "ERROR";

    if(to < from){
        // An alternative way to swap the values of min and max like above is to use the array destructuring syntax.
        // Here's an optional article on it: https://www.freecodecamp.org/news/array-destructuring-in-es6-30e398f21d10/
        // if (min > max) [min, max] = [max, min];
        const tempTo = to;
        to = from;
        from = tempTo;
    }
    let sum = 0;
    for(let i = from; i <= to ; i++){
        sum += i;
    }
    return sum;
};


// Do not edit below this line
module.exports = sumAll;
