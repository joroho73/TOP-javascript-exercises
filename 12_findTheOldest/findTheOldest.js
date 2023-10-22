function compareByYearOfBirth(a, b) {
    return a.yearOfBirth - b.yearOfBirth;
}

function compareAge(a, b) {
    return b.age - a.age;
  }

function calculateAge(yearOfBirth, yearOfDeath){
    return yearOfDeath - yearOfBirth;
}

const findTheOldest = function(people) {

    for (person of people){
        const year = new Date().getFullYear()
        if (person.yearOfDeath == undefined) person.yearOfDeath = year;
        console.log("yod2:" + person.yearOfDeath);
        person.age = calculateAge(person.yearOfBirth, person.yearOfDeath);
    }

    people.sort(compareAge);

    // for (person of people){
    //     for(const [key, value] of Object.entries(person)){
    //         console.log(`${key}: ${value}`)
    //         //console.log(typeof(person.age));
        
    //     }
    // }
    console.log(people[0]);
    return people[0];
};




const peopleArr = [
    {
      name: "Carly",
      yearOfBirth: 1942,

    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

  findTheOldest(peopleArr);

// Do not edit below this line
module.exports = findTheOldest;
