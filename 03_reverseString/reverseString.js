const reverseString = function(string) {
    const len = string.length;
    let reversed = "";

    for (let i = len - 1; i >= 0; i--){
        //console.log(i+string[i]);
        reversed += string[i];
    }
//console.log(reversed);
 return reversed;
};

reverseString('abcd');

// Do not edit below this line
module.exports = reverseString;
