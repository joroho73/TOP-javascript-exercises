const fibonacci = function(num) {
    num = parseInt(num);
    if(num < 0) return "OOPS";

    let fsum;
    let f1 = 1;
    let f2 = 0;

    for(let i = 0; i < num; i++){
        fsum = f1 + f2;
        f1 = f2;
        f2 = fsum;
    }
    console.log(fsum);
    return fsum;
};

//fibonacci();

// Do not edit below this line
module.exports = fibonacci;
