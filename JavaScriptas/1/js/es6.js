//Template literals

let name = "Arnas";
let count = 14;
let price = 12.23;

console.log(`mah naehm ez ${name}`)
console.log(`Suma: ${count * price}`)

//Array destructor

let [first, middle, last] = ['Dylan', 'Coder', 'Israel'];
console.log(first);
console.log(middle);
console.log(last);

last='Clements';

console.log(last);

//Object destructor

const personalInfo = {
    first: 'Dylan',
    last: 'Israel',
    city: 'Austin',
    state: 'Texas',
    zip: 73301
};

const {first: fn, last: ln} = personalInfo;

console.log(`${fn} ${ln}`);

//Object literal

function addressMaker (city,state) {
    const newAddress = {NewCity: city, newState: state};
    console.log(newAddress);
}

function addressMakerUpdate (city,state) {
    const newAddress = {city, state};
    console.log(newAddress);
}

addressMakerUpdate('Kaunas', 'Kauno')

//Includes

let students = ['Ieva', 'Tadas', 'Tomas', ' Petras'];

const searchString = 'Tadas';
if(students.includes(searchString)){
    console.log(`ye is here yo ${searchString}`)
}else {
    console.log(`nah bru aint here`)
}