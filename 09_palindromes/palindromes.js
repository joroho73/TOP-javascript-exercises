const palindromes = function (txt) {
    console.log(txt);
    let pal = txt.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replaceAll(" ","").toLowerCase();

    console.log(pal);
    const arrForward = Array.from(pal);
    console.log(arrForward);
    let arrReversed = [];
    for(let i = arrForward.length-1; i >=0; i-- ){
        arrReversed.push(arrForward[i]);
    }
    console.log(arrReversed);

    if(arrForward.toString() === arrReversed.toString()){
        console.log('true');
        return true;
    } else {
        console.log('false');
        return false;
    }

    // //this is the TOP solution
    // const processedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    // return processedString.split("").reverse().join("") == processedString;

};
//palindromes('Race car!');

// Do not edit below this line
module.exports = palindromes;
