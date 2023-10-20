const removeFromArray = function(arr, ...args) {
    //if (typeof(arr) != Object) {return "Error - not an array";}

    console.log(arr);
    console.log(args);

    // for (let j = 0; j <= args.length-1; j++){
    //     console.log(args[j])
    // }

    for (arg of args){
        //console.log(arg);
        for (let i = 0; i < arr.length; i++){
            if (arg === arr[i]){
                arr.splice(i,1);
                //console.log(arr);
            }
        }
    }
    return arr;
};


removeFromArray(["a",2,3],2,3,4,5)

module.exports = removeFromArray;
