// Logical Operators
// AND operator

const age = 17
const gender = 'female' 

if (age >= 18 && gender == 'female'){
    console.log("your are adult")
}
else
    console.log('you are female')

// OR operator

const age1 = 17
const gender1 = 'female' 

if (age1 >= 18 || gender1 == 'male'){
    console.log("your are adult")
}
else
    console.log('you are female')

// NOT operator

const number = 5

if (!(number % 2 == 0)){
    console.log('odd')
}
else {
    console.log('even')
}
    