
const leapYears = function(year) {
    console.log(year);

    if (year % 4 === 0 
        && year % 100 === 0 
        && year % 400 === 0){
            //console.log( year + " true");
            return true;
        }
    else {
        if (year % 4 === 0 
            && year % 100 !== 0 
            && year % 400 !== 0){
                //console.log(year + " all true");
                return true;
        }
        else {
            //console.log(year + " all false");
            return false;
        }
    }
    

}



// ;
// console.log("=====")
// leapYears(1996)
// leapYears(1997);
// leapYears(34992); 
// leapYears(1900);
// leapYears(1600);
// leapYears(700);
// console.log("=====")

// Do not edit below this line
module.exports = leapYears;
